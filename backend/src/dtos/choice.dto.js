export const bodyToChoice = (body) => {
  return {
    meal_time: body.meal_time,
    purpose: body.purpose,
    mood: body.mood,
    with: body.with,
    budget: body.budget,
    exceptions: body.exceptions,
    weather: body.weather,
  };
};

// {
// "meal_time" : 3,
// "purpose" : 1,
// "mood" : 2,
// "with" : 3,
// "budget" : 2,
// "exceptions" : ["건강한 음식", "면"],
// "weather" : "더움"
// }
