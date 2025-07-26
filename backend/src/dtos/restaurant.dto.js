export const openingHoursDto = (weekdayDescriptions) => {
  return weekdayDescriptions.map(description => {
    const [dayPart, timePart] = description.split(": ");
    
    // 요일 매핑
    const dayMapping = {
      "월요일": "월",
      "화요일": "화", 
      "수요일": "수",
      "목요일": "목",
      "금요일": "금",
      "토요일": "토",
      "일요일": "일"
    };
    
    const days_of_the_week = dayMapping[dayPart] || dayPart;
    
    // 시간 변환
    let time;
    if (timePart === "휴무일" || timePart === "정기휴일" || timePart === "휴일") {
      time = "휴일";
    } else {
      // "오후 12:30~10:00" -> "12:30 - 22:00" 형태로 변환
      time = timePart
        .replace(/오전\s*/g, "")
        .replace(/오후\s*/g, "")
        .replace(/~/g, " - ")
        .replace(/(\d{1,2}):(\d{2})\s*-\s*(\d{1,2}):(\d{2})/, (match, h1, m1, h2, m2) => {
          // 오후 시간 처리 (12시 이후)
          let startHour = parseInt(h1);
          let endHour = parseInt(h2);
          
          // 12:30 같은 경우는 그대로, 1:00~11:59는 +12
          if (timePart.includes("오후") && startHour !== 12) {
            startHour += 12;
          }
          if (timePart.includes("오후") && endHour !== 12 && endHour < 12) {
            endHour += 12;
          }
          
          return `${startHour.toString().padStart(2, '0')}:${m1} - ${endHour.toString().padStart(2, '0')}:${m2}`;
        });
    }
    
    return {
      days_of_the_week,
      time
    };
  });
};