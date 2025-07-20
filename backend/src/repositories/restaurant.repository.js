import dotenv from "dotenv";

dotenv.config();




// {
// "y" : "37.4895246",
// "x" : "126.986331",
// "radius" : "3000",
// "keyword" : "아메리카노"
// }
export const fetchKakaoPlaces = async (info) => {
    console.log("Fetching places with info:", info);
    const url = new URL("https://dapi.kakao.com/v2/local/search/keyword.json");

    // GET 파라미터 설정
    url.searchParams.append("y", info.y);
    url.searchParams.append("x", info.x);
    url.searchParams.append("radius", info.radius);
    url.searchParams.append("query", info.keyword);
    console.log("Request URL:", url.toString());
    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
        },
    });
    console.log("Response status:", response.status);
    if (!response.ok) {
        console.error("API 요청 실패:", response.statusText);
        return;
    }
    const data = await response.json();
    return data;
};

