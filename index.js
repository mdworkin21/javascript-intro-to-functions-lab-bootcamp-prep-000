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


var lowercase = "hello!"
var uppercase = "HELLO!"

function sayHiToGrandma(string){
  return "I love you, too."
}

if (sayHiToGrandma("I love you, Grandma")){

    console.log("I love you, too")
} else if (sayHiToGrandma.toLowerCase() === lowercase){
    console.log("I can't hear you!")
  } else {
    console.log("YES INDEED")
}
