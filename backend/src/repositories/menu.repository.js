import { OpenAI } from 'openai';
import dotenv from "dotenv";
import { pool } from "../db.config.js";
dotenv.config();
const key = process.env.OPENAI_API_KEY;

// 데이터베이스 연결 테스트
export const testDatabaseConnection = async () => {
    try {
        console.log("Testing database connection...");
        const [rows] = await pool.execute('SELECT 1 as test');
        console.log("Database connection successful!");
        return true;
    } catch (error) {
        console.error("Database connection failed:", error);
        return false;
    }
};


// 메뉴가 데이터베이스에 존재하는지 확인
export const checkMenuExists = async (menuName) => {
    if (menuName === undefined || menuName === null) {
        console.error("Menu name is undefined or null");
        return true;
    }
    try {
        const [rows] = await pool.execute(
            'SELECT * FROM menu WHERE name = ?',
            [menuName]
        );
        return rows.length > 0;
    } catch (error) {
        console.error("Error checking menu existence:", error);
        throw error;
    }
};

// 새로운 메뉴를 데이터베이스에 추가
export const addMenuToDatabase = async (menuData) => {
    try {
        console.log("Adding menu to database:", menuData);
        const { menuName, description, calories, carbs, protein, fat, sodium, vitamins, allergyInfo } = menuData;

        const [result] = await pool.execute(
            `INSERT INTO menu (name, description, calory, carbo, protein, fat, vitamin, allergic, sodium) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                menuName,
                description,
                calories,
                carbs,
                protein,
                fat,
                JSON.stringify(vitamins),
                JSON.stringify(allergyInfo),
                sodium,
            ]
        );

        console.log("Menu added to database:", menuName);
        return result;
    } catch (error) {
        console.error("Error adding menu to database:", error);
        throw error;
    }
};

//req.body.choice

//request body 예시
// {
// "meal_time" : 3,
// "purpose" : 3,
// "mood" : 3,
// "with" : 1,
// "budget" : 1,
// "exceptions" : ["중식", "면"],
// "gender" : 1,
// "exercise" : 3,
// "prefer" : ["한식","양식"],
// "body_type" : 4,
// "allergy" : ["갑각류"]
// "weather" : "맑음"
// }
export const recommendMenu = async (choice) => {
    try {
        console.log("Received request for GPT processing");

        const openai = new OpenAI({
            apiKey: key
        });
        console.log("OpenAI client initialized successfully");

        const { meal_time, purpose, mood, with: withWhom, budget, exceptions, exceptions2, gender, exercise, prefer, body_type, allergy } = choice;
        console.log("Received choice data:", choice);
        // bigint -> 자연어 매핑
        const mealTimeText = {
            1: "아침 식사: 속이 편한 음식, 자극적이지 않고 간단한 조리 가능",
            2: "점심 식사: 활동을 위한 에너지를 줄 수 있는 먹을거",
            3: "저녁 식사: 포만감 높은 먹을거",
            4: "야식: 부담이 적고 간편하거나 입맛 당기는 음식"
        }[meal_time] || "식사";

        const purposeText = {
            1: "든든한 한끼 식사: 국, 찌개 혹은 단일 고열량 식사 ",
            2: "술 안주 겸: 짭조름하거나 자극적인 음식, 소스가 강하거나 튀김류",
            3: "간식: 양이 적거나 간편식, 디저트류 ",
            4: "기념일 식사: 예쁘거나 고급진 느낌, 공유하기 좋은 메뉴 ",
        }[purpose] || "";

        const moodText = {
            1: "들뜨고 신나요 : 새롭거나 특이한 메뉴, 강한 자극을 줄 수 있는 음식",
            2: "지치고 피곤해요 : 따뜻하거나 국물이 있는 음식, 속 편한 식사",
            3: "슬프고 울적해요 : 부드럽고 달달하고, 자극적인 음식",
            4: "화나고 답답해요 : 매운 음식, 자극적인 음식",
        }[mood] || "";


        const withText = {
            1: "혼자 : 1인분으로 즐기기 쉬운 음식, 단일메뉴",
            2: "연인 : 비주얼 좋고 나눠먹기 좋은 메뉴",
            3: "친구들 : 공유 가능한 양 많거나 취향 다양한 메뉴",
            4: "가족들 : 따뜻하고 밥반찬 구성"
        }[withWhom] || "";


        const budgetText = {
            1: "0원 이상 1만원 미만",
            2: "0원 이상 3만 원 이하",
            3: "가격 제한 없음",
        }[budget] || "";

        const genderText = {
            1: "여성",
            2: "남성",
        }[gender] || "";

        const exerciseText = {
            1: "다이어트 중",
            2: "벌크업 중",
            3: "상관 없음",
        }[exercise] || "";

        const bodyTypeText = {
            1: "감기에 잘 걸리는 편",
            2: "소화가 잘 안 되는 편",
            3: "열이 많아서 더위를 잘 타는 편",
            4: "추위를 잘 타고 몸이 쉽게 차가워지는 편"
        }[body_type] || "";

        console.log("Meal Time:", mealTimeText);
        console.log("Purpose:", purposeText);
        console.log("Mood:", moodText);
        console.log("With:", withText);
        console.log("Budget:", budgetText);
        console.log("Gender:", genderText);
        console.log("Exercise:", exerciseText);
        console.log("Body Type:", bodyTypeText);
        const exceptionsString = exceptions && exceptions.length > 0
            ? exceptions.map(item => item.name).join(", ")
            : "없음";
        console.log("exceptionsString:", exceptionsString);
        const preferencesString = prefer && prefer.length > 0
            ? prefer.join(", ")
            : "없음";
        console.log("preferencesString: ", preferencesString);
        const allergyString = allergy && allergy.length > 0
            ? allergy.join(", ")
            : "없음";
        console.log("allergyString:", allergyString);

        const exceptedMenus2String = exceptions2 && exceptions2.length > 0
            ? exceptions2.join(", ")
            : "없음";
        console.log("exceptedMenus2String:", exceptedMenus2String);

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [
                {
                    role: "user",
                    content: `그 동안 나온거 제외하고 먹을 거 하나를 추천해줘.
                        다음은 메뉴 추천을 할 때 참고할 정보들이야.
                        먹는 시간: ${mealTimeText}
                        목적: ${purposeText}
                        기분: ${moodText}
                        함께하는 사람: ${withText}
                        예산: ${budgetText}
                        제외하는 음식 종류: ${exceptionsString}
                        성별: ${genderText}
                        체중 증량, 감량 여부: ${exerciseText}
                        선호하는 음식 종류: ${preferencesString} ( 조금만 참고 해줘도 돼. )
                        체질: ${bodyTypeText}
                        사용자의 알레르기: ${allergyString}
                        현재 날씨: ${choice.weather}
                        각각의 정보들에 딱 들어 맞을 필요까지는 없고, 5가지 요소를 최대한 반영해줘.
                        그리고 추천해 줄 때 메뉴명을 띄어쓰기 없는 간결한 단어로 말해줘야해.
                        ex) 한우 숙성 꽃등심 스테이크는 적절하지 않고, 스테이크는 맞아.
                        ex) 비리아 타코는 적절하지 않고, 타코는 맞아.
                        또, 카카오 맵에 검색했을 때 나오는 메뉴 이름이면 가산점이야.
                        이미지링크도 같이 추천해줘.
                        추천할 때 아래 형식의 JSON으로 3개의 메뉴를 3개의 json 배열로 답해줘(마크다운 없이):
                        {
                            "menu": "짜장면",
                            "description": "간장 소스로 볶은 중화풍 면 요리",
                            "calories": 800,
                            "carbohydrates": 90,
                            "protein": 20,
                            "fat": 30,
                            "sodium": 1200,
                            "vitamins": ["A", "B1", "B2", "C"],
                            "allergies": ["밀", "대두"],
                        }
                         
                            `
                },
            ],
        });

        const rawText = completion.choices[0].message.content.trim();

        // JSON 배열로 파싱
        const parsedArray = JSON.parse(rawText);


        return parsedArray;
    } catch (error) {
        console.error("Error handling GPT request:", error);
        throw error;
    }
}

export const findRelatedMenu = async (menuName) => {
    const openai = new OpenAI({
        apiKey: key
    });
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        store: true,
        messages: [
            {
                role: "user",
                content: `다음 메뉴와 관련된 메뉴를 추천해줘. 
                        메뉴 이름: ${menuName}
                        해당 메뉴 이름은 현재 구글 맵에서 관련된 음식점을 찾을 수 없는 메뉴 이름이야.
                        따라서 구글맵에 검색했을 때 음식점이 나올만한 메뉴 중 일반적인 메뉴 한개를 응답해주면 돼.
                        그냥 단어 한개만 응답하면돼.
                        `
            },
        ],
    });
    const rawText = completion.choices[0].message.content.trim();
    console.log("Raw response from GPT:", rawText);
    return rawText;
}