function scuberGreetingForFeet(distanceInFeet) {
  // Use if-else if statements to return greeting based on distance
  if (distanceInFeet <= 1000) {
    return "Welcome aboard, walker! Buckle up for a short stroll.";
  } else if (distanceInFeet <= 5000) {
    return "Ready for a jaunt? Your Scuber awaits.";
  } else {
    return "Looks like a trek! We'll get you there comfortably.";
  }
}

function ternaryCheckCity(city) {
  // Use ternary operator to return response based on destination
  return city === "San Francisco" ? "Headed to the Golden Gate? Nice choice!" : "Exploring a new city? Let's Scuber!";
}

function switchOnCharmFromTip(tipPercentage) {
  // Use switch statement to return response based on tip
  switch (tipPercentage) {
    case 0:
      return "Thanks for riding with Scuber!";
    case 10:
      return "We appreciate the standard tip.";
    case 15:
    case 20:
      return "Wow, you're a generous rider! Thanks!";
    default:
      return "You shouldn't have! Thank you for the amazing tip.";
  }
}

// Example usage
console.log(scuberGreetingForFeet(800));   // Output: "Welcome aboard, walker! Buckle up for a short stroll."
console.log(ternaryCheckCity("Seattle"));  // Output: "Exploring a new city? Let's Scuber!"
console.log(switchOnCharmFromTip(25));     // Output: "You shouldn't have! Thank you for the amazing tip."
