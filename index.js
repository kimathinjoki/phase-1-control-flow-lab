function scuberGreetingForFeet(ride){
  // Write your code here!


  if (ride > 0 && ride <= 400) {
    return "This one is on me!"

  }else if (ride > 2000 && ride < 2500){
    return "I will gladly take your thirty bucks."
  }else{
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!

  const town = city === "NYC" ? "Ok, sounds good.": "No go.";
  return town

}

function switchOnCharmFromTip(tip){
// Write your code here!
if (tip === "generous"){
  return "Thank you so much.";
}else if ( tip === "not as generous"){
  return "Thank you.";
}else{
  return "Bye."
}

}