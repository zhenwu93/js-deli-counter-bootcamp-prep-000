function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName);
  //for(katzDeliLine = 0; katzDeliLine < katzDeliLine.length; katzDeliLine++) {
  return "Welcome, " + customerName + ". You are number " + katzDeli.length + " in line."
  //}
  //return katzDeli
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
