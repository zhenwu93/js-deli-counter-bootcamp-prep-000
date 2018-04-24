function takeANumber(katzDeliLine, customerName) {
  katzDeliLine.push(customerName);
  return "Welcome, " + customerName + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return "Currently serving " + deliLine.shift() + "."
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if(line.length < 1){
    return "The line is currently empty."
  } else {
    for(let i = 1; i < line.length; i++) {
      line.push("The line is currently: " + line);
    }
    return line
  }
}
