var katzDeli = [];

function takeANumber(katzDeliLine, customerName) {
  for(katzDeliLine = 0; katzDeliLine < katzDeliLine.length; katzDeliLine++) {
   katzDeli.push("Welcome, " + customerName + ". You are number " + katzDeliLine " in line.");
  }
  return katzDeli
}

function nowServing(katzDeliLine) {

}

function currentLine(katzDeliLine, customerName) {
  if(katzDeliLine > 1) {
    return katzDeliLine.customerName
  } else {
    console.log("The line is currently empty.")
  }
}
