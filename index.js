function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine, customerName) {
  if (katzDeliLine.length > 1) {
    katzDeliLine.shift(customerName);
    return "Currently serving " + customerName
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine, customerName) {
  if(katzDeliLine > 1) {
    return katzDeliLine.customerName
  } else {
    console.log("The line is currently empty.")
  }
}
