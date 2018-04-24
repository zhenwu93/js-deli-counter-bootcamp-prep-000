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
  if(line.length > 0) {
    var array = [];
    var i = 0;
    while (i < line.length) {
      array.push([] + line[i])
      i++;
    }
    return "The line is currently: " + line
  } else {
    return "The line is currently empty."
  }
}
