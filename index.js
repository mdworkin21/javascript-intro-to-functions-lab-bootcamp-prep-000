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

 if (lowercase.toLowerCase() === lowercase){
   return "I can't hear you!"
 } else {
   return "YES INDEED!"
 }

}

sayHiToGrandma(uppercase);
