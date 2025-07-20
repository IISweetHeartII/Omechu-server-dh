export const bodyToChoice = (body) => {
    return {
        meal_time: body.meal_time,
        purpose: body.purpose,
        mood: body.mood,
        with: body.with,
        budget: body.budget
    };
}


// {
// "meal_time" : "breakfast",
// "purpose" : "meal",
// "mood" : "tired",
// "with" : "solo",
// "budget" : "less_then_10000"
// }