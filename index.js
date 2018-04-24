function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeli.length + " in line."
}

function nowServing(currentLine, customerName) {
  if (currentLine = 0) {
    return "There is nobody waiting to be served"
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
