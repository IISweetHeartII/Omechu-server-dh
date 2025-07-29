import { StatusCodes } from "http-status-codes";
import { fetchKakaoPlacesService } from "../services/restaurant.service.js";
import { fetchGooglePlacesService } from "../services/restaurant.service.js";
import { fetchPlaceDetailService } from "../services/restaurant.service.js";
import { openingHoursDto } from "../dtos/restaurant.dto.js";
export const handleFetchKakaoPlaces = async (req, res) => {
  const info = {
    y: req.body.y,
    x: req.body.x,
    radius: req.body.radius,
    keyword: req.body.keyword
  };

  try {
    const places = await fetchKakaoPlacesService(info);
    if (places && places.length > 0) {
      res.status(200).json(places);
    } else {
      res.status(404).json({ message: "No places found" });
    }
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export const handleFetchGooglePlaces = async (req, res) => {

  const info = {
    keyword: req.body.keyword,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    radius: req.body.radius,
    pageSize: req.body.pageSize
  };

  try {
    const places = await fetchGooglePlacesService(info);
    if (places && places.length > 0) {
      res.status(200).json(places);
    } else {
      res.status(404).json({ message: "No places found" });
    }
  } catch (error) {
    console.error("Error fetching Google places:", error);
    res.status(500).json({ message: "Internal server error" });
  }
  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "Google Places API를 이용한 장소 검색 API"
  #swagger.description = "Google Places API를 사용하여 특정 위치 주변의 장소를 검색하는 API입니다."

  #swagger.requestBody = {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          required: ['latitude', 'longitude', 'radius', 'keyword', 'pageSize'],
          properties: {
            latitude: { 
              type: 'number', 
              example: 37.4895246,
              description: "검색할 위치의 위도"
            },
            longitude: { 
              type: 'number', 
              example: 126.986331,
              description: "검색할 위치의 경도"
            },
            radius: { 
              type: 'integer', 
              example: 3000,
              description: "검색 반경 (미터 단위)"
            },
            keyword: { 
              type: 'string', 
              example: "젤라또",
              description: "검색할 키워드"
            },
            pageSize: { 
              type: 'integer', 
              example: 5,
              description: "반환할 결과 개수"
            }
          }
        }
      }
    }
  }

  #swagger.responses[200] = {
    description: "장소 검색 성공",
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', example: 'ChIJ86MmmAGhfDUR1C6TNesYXDM' },
              formattedAddress: { 
                type: 'string', 
                example: '대한민국 서울특별시 서초구 방배본동 동광로 67' 
              },
              rating: { type: 'number', example: 4.1 },
              userRatingCount: { type: 'integer', example: 335 },
              displayName: { 
                type: 'object',
                properties: {
                  text: { type: 'string', example: '일일향 방배점' },
                  languageCode: { type: 'string', example: 'ko' }
                }
              }
            }
          }
        }
      }
    }
  }
//

  #swagger.responses[404] = {
    description: "장소를 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'No places found' }
          }
        }
      }
    }
  }

  #swagger.responses[500] = {
    description: "서버 내부 오류",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Internal server error' }
          }
        }
      }
    }
  }
  */

};

export const handleFetchPlaceDetail = async (req, res) => {

  const placeId = req.params.id;

  try {
    const placeDetail = await fetchPlaceDetailService(placeId);
    placeDetail.currentOpeningHours.weekdayDescriptions = openingHoursDto(placeDetail.currentOpeningHours.weekdayDescriptions);
    if (placeDetail) {
      res.status(StatusCodes.OK).json(placeDetail);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ message: "Place detail not found" });
    }
  } catch (error) {
    console.error("Error fetching place detail:", error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Internal server error" });
  }

  /*
  #swagger.tags = ["Restaurant"]
  #swagger.summary = "Google Places 장소 상세 정보 조회 API"
  #swagger.description = "Google Places API를 사용하여 특정 장소의 상세 정보를 조회하는 API입니다."

  #swagger.parameters['id'] = {
    in: 'path',
    name: 'id',
    required: true,
    type: 'string',
    example: 'ChIJm26UcZyhfDURkuYARFNUpp8',
    description: 'Google Place ID'
  }

  #swagger.responses[200] = {
    description: "장소 상세 정보 조회 성공",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
          formattedAddress: { 
              type: 'string', 
              example: '서울특별시 강남구 테헤란로 123' 
            },
            location: {
              type: 'object',
              properties: {
                latitude: { type: 'number', example: 37.4895246 },
                longitude: { type: 'number', example: 126.986331 }
              }
            },
            displayName: {
              type: 'object',
              properties: {
                text: { type: 'string', example: '맛있는 레스토랑' }
              }
            },
            
            currentOpeningHours: {
        type: 'object',
        properties: {
          weekdayDescriptions: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                days_of_the_week: { 
                  type: 'string', 
                  example: '월',
                  description: '요일 (월, 화, 수, 목, 금, 토, 일)'
                },
                time: { 
                  type: 'string', 
                  example: '10:00 - 22:00',
                  description: '영업시간 (휴일인 경우 "휴일")'
                }
              }
            },
            example: [
              { days_of_the_week: "월", time: "10:00 - 22:00" },
              { days_of_the_week: "화", time: "10:00 - 22:00" },
              { days_of_the_week: "수", time: "10:00 - 22:00" },
              { days_of_the_week: "목", time: "10:00 - 22:00" },
              { days_of_the_week: "금", time: "10:00 - 23:00" },
              { days_of_the_week: "토", time: "10:00 - 23:00" },
              { days_of_the_week: "일", time: "휴일" }
            ]
          }
        }
      }
    }
  }

  #swagger.responses[404] = {
    description: "장소 상세 정보를 찾을 수 없음",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Place detail not found' }
          }
        }
      }
    }
  }

  #swagger.responses[500] = {
    description: "서버 내부 오류",
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            message: { type: 'string', example: 'Internal server error' }
          }
        }
      }
    }
  }
  */
}