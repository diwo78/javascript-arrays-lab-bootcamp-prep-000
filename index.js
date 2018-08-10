function beforeEach (arrays){
 window.kittens = ['Milo','Otis','Garfield']
}
var kittens = ["Milo","Otis","Garfield"];
function destructivelyAppendKitten(Ralph){
   kittens.push(Ralph);
   return kittens
}
function destructivelyPrependKitten(Bob){
  kittens.unshift(Bob);
  return kittens
}
function destructivelyRemoveLastKitten() {
  
}