/**
 * ["hola", "mundo"]
 * ["odnu","maloh"]
 * "odnu maloh "
 */

 function reverser(array) {

  let spaces = array.map(e => e.length)
  for(let x = 0; x <= spaces.length-1; x++) {
    if(x !== 0){
      spaces[x] = spaces[x] + spaces[x-1]
    }
  }

  array = array.join("")
    .split("")
    .reverse()
    .map((e, i) => spaces.includes(i) ? " " + e : e)
    .join("")
    .split(" ")

  return array
 }

 module.exports = {
   reverser
 }
