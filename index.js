function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var lowercase = "hello!"
  var uppercase = "HELLO!"

  if (string.toLowerCase() === true){
    return "I can't hear you!"
  } else if (string.toUpperCase() === true){
    return "YES INDEED!"
  } else {
    return "I love you too!"
  }

}
