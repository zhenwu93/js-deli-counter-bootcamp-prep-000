function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length > 1) {
    return "Currently serving " + deliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length > 1) {
    return "The line is currently: " + katzDeliLine
  } else {
    return "The line is currently empty."
  }
}
