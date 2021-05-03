function getBotResponse(userText) {
    switch(userText.toUpperCase()){
        case "HELLO":
        case "HI":
            return "Hello! How are you doing";
        case "I AM GOOD":
            return "Good to hear that. How can I help you?";
        case "I AM GOOD. HOW ARE YOU":
            return "I am good. Thanks for asking. How can I help you?";
        case "FUCK YOU":
            return "Go Fuck yourself first.";
        case "HEART CLICKED!" :
            return "Thank you :)";
        case "THANKS" :
        case "THANK YOU" :
            return "You're welcome :)";
        default :
            return "I didn't get you. Please try again!!!";
    }
}