import {
  findUserMukburimStatistics,
  findUserMukburimByMonth,
  findUserMukburimByDate
} from '../repositories/mukburim.statistics.repository.js';

import {
  NoMukburimData,
  InvalidMukburimPeriod,
  InvalidDateRange,
  MukburimStatisticsError,
  NoParams
} from '../errors.js';

/**
 * 먹부림 통계 조회 서비스
 */
export const getMukburimStatisticsService = async (userId, period, customStartDate, customEndDate) => {
  if (!userId) {
    throw new NoParams('사용자 ID가 필요합니다.', { userId });
  }

  let startDate, endDate;
  const now = new Date();
  
  try {
    // 기간별 날짜 계산
    if (customStartDate && customEndDate) {
      // 커스텀 날짜 범위 검증
      startDate = new Date(customStartDate);
      endDate = new Date(customEndDate);
      
      if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        throw new InvalidDateRange('잘못된 날짜 형식입니다.', { 
          startDate: customStartDate, 
          endDate: customEndDate 
        });
      }
      
      if (startDate > endDate) {
        throw new InvalidDateRange('시작 날짜가 종료 날짜보다 늦을 수 없습니다.', { 
          startDate: customStartDate, 
          endDate: customEndDate 
        });
      }
      
      endDate.setHours(23, 59, 59, 999);
    } else {
      // 기간 유효성 검사
      const validPeriods = ['전체', '1주', '1개월', '3개월', '6개월', '1년', 'week', 'month', '3months', '6months', 'year', 'all'];
      if (period && !validPeriods.includes(period)) {
        throw new InvalidMukburimPeriod('지원하지 않는 기간입니다.', { 
          period, 
          validPeriods 
        });
      }

      // 현재 시점을 기준으로 기간 계산
      endDate = new Date(now);
      endDate.setHours(23, 59, 59, 999);

      switch (period) {
        case '1주':
        case 'week':
          startDate = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
          break;
        case '1개월':
        case 'month':
          startDate = new Date(now);
          startDate.setMonth(startDate.getMonth() - 1);
          break;
        case '3개월':
        case '3months':
          startDate = new Date(now);
          startDate.setMonth(startDate.getMonth() - 3);
          break;
        case '6개월':
        case '6months':
          startDate = new Date(now);
          startDate.setMonth(startDate.getMonth() - 6);
          break;
        case '1년':
        case 'year':
          startDate = new Date(now);
          startDate.setFullYear(startDate.getFullYear() - 1);
          break;
        case '전체':
        case 'all':
        default:
          startDate = new Date('2020-01-01');
          break;
      }
      startDate.setHours(0, 0, 0, 0);
    }

    const statistics = await findUserMukburimStatistics(userId, startDate, endDate);

    // 데이터가 없는 경우
    if (statistics.totalRecords === 0) {
      throw new NoMukburimData('해당 기간에 먹부림 기록이 없습니다.', { 
        period, 
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0]
      });
    }

    // 기간 계산 (일수)
    const daysDiff = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    const averagePerDay = daysDiff > 0 ? Math.round((statistics.totalRecords / daysDiff) * 10) / 10 : 0;

    return {
      period: period || '전체',
      dateRange: {
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        displayRange: `${startDate.toLocaleDateString('ko-KR')} ~ ${endDate.toLocaleDateString('ko-KR')}`
      },
      summary: {
        totalRecords: statistics.totalRecords,
        uniqueMenus: statistics.uniqueMenus,
        averagePerDay: averagePerDay
      },
      menuStatistics: statistics.menuStatistics
    };
  } catch (error) {
    // 이미 커스텀 에러인 경우 그대로 전파
    if (error instanceof NoMukburimData || 
        error instanceof InvalidMukburimPeriod || 
        error instanceof InvalidDateRange ||
        error instanceof NoParams) {
      throw error;
    }
    
    // 예상치 못한 에러인 경우
    throw new MukburimStatisticsError('먹부림 통계 조회 중 오류가 발생했습니다.', { 
      userId, 
      period, 
      error: error.message 
    });
  }
};

/**
 * 먹부림 캘린더 조회 서비스
 */
export const getMukburimCalendarService = async (userId, year, month) => {
  if (!userId || !year || !month) {
    throw new NoParams('사용자 ID, 년도, 월이 모두 필요합니다.', { 
      userId, 
      year, 
      month 
    });
  }

  // 년도, 월 유효성 검사
  const currentYear = new Date().getFullYear();
  if (year < 2020 || year > currentYear + 1) {
    throw new InvalidDateRange('유효하지 않은 년도입니다.', { year });
  }
  
  if (month < 1 || month > 12) {
    throw new InvalidDateRange('유효하지 않은 월입니다.', { month });
  }

  try {
    const mukburimList = await findUserMukburimByMonth(userId, year, month);
    
    // 날짜별로 그룹핑
    const groupedByDate = {};
    
    mukburimList.forEach(item => {
      const dateKey = item.date.toISOString().split('T')[0];
      
      if (!groupedByDate[dateKey]) {
        groupedByDate[dateKey] = [];
      }
      
      groupedByDate[dateKey].push({
        id: item.id,
        menu_name: item.menu_name,
        time: item.date.toLocaleTimeString('ko-KR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        })
      });
    });

    return {
      year: parseInt(year),
      month: parseInt(month),
      totalRecords: mukburimList.length,
      calendar: groupedByDate
    };
  } catch (error) {
    if (error instanceof NoParams || error instanceof InvalidDateRange) {
      throw error;
    }
    
    throw new MukburimStatisticsError('먹부림 캘린더 조회 중 오류가 발생했습니다.', { 
      userId, 
      year, 
      month, 
      error: error.message 
    });
  }
};

/**
 * 특정 날짜 먹부림 조회 서비스
 */
export const getMukburimByDateService = async (userId, targetDate) => {
  if (!userId || !targetDate) {
    throw new NoParams('사용자 ID와 날짜가 필요합니다.', { 
      userId, 
      targetDate 
    });
  }

  // 날짜 유효성 검사
  const date = new Date(targetDate);
  if (isNaN(date.getTime())) {
    throw new InvalidDateRange('잘못된 날짜 형식입니다.', { targetDate });
  }

  try {
    const mukburimList = await findUserMukburimByDate(userId, date);
    
    return {
      date: targetDate,
      totalRecords: mukburimList.length,
      records: mukburimList.map(item => ({
        id: item.id,
        menu_name: item.menu_name,
        time: item.date.toLocaleTimeString('ko-KR', { 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        created_at: item.date
      }))
    };
  } catch (error) {
    if (error instanceof NoParams || error instanceof InvalidDateRange) {
      throw error;
    }
    
    throw new MukburimStatisticsError('특정 날짜 먹부림 조회 중 오류가 발생했습니다.', { 
      userId, 
      targetDate, 
      error: error.message 
    });
  }
};