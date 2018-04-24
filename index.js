function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeli, customerName) {
  if (katzDeli.length = 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving " + customerName
    currentLine.shift(customerName);
  }
}

function currentLine(katzDeliLine, customerName) {
  if(katzDeliLine > 1) {
    return katzDeliLine.customerName
  } else {
    console.log("The line is currently empty.")
  }
}
