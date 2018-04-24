function takeANumber(katzDeli, customerName) {
  katzDeli.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeli.length + " in line."
}

function nowServing(katzDeli, customerName) {
  return customerName
  katzDeli.shift(customerName);
  if (katzDeli = 0) {
    return "There is nobody waiting to be served"
  }
}

function currentLine(katzDeliLine, customerName) {
  if(katzDeliLine > 1) {
    return katzDeliLine.customerName
  } else {
    console.log("The line is currently empty.")
  }
}
