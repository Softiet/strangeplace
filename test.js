console.log('5487');
var answer;
var i;
//window.alert('共產');
//document.getElementById('choice').textContent= new Date();
console.log(document.getElementById('curtime'));

document.getElementById('curtime').textContent= new Date();
document.getElementById('rewritetest').textContent= 'hello?';
document.getElementById('rewritetest').textContent= 'yo';

console.log(document.getElementById('rewritetest').textContent);

//console.log(window.confirm('Ready for pony?'));

//window.confirm('yes?');

if(window.confirm('Ready for pony?')){
  console.log('Pony Attack');
  window.alert('pony attack');
}
else{
  console.log('Mission failed, we will get them next time');
}

/*answer = window.prompt('surrender to celestia');
console.log(answer);
*/

/*for (i = 0; answer!=='yes'; i++){
  answer = window.prompt('surrender to celestia');
  //document.getElementById('curtime').textContent= new Date();
}
*/

var number = Math.floor(Math.random()*6);
/*

for(i=0;answer!==number;){
  if(answer>number){
    window.alert('too big');
  }
  else if(answer<number){
    window.alert('too small');
  }
  answer=parseInt(window.prompt('guess?'));
}
window.alert('Yes');

*/
for(i=0;i<3;i++){
  window.alert(i+' piece of shit');
}
var cost=window.prompt('cost?');
cost=parseInt(cost);
var total = function(price){
    var tax = 0.5;
    return (price + price * tax);
}
//console.log(total(cost));
window.alert('yo it is '+total(cost)+' dollar' );

var greatponies =['Twilight','AppleJack','Rairity','Fluttershy'];
greatponies.push('sunset shimmer');
for(i=0;i<5;i++){
  console.log(greatponies[i]);
}


for(i=0;i<greatponies.length;i++){
  var liz=document.createElement('li');
  liz.textContent = greatponies[i];
  document.getElementById('ponylist').appendChild(liz);
}
