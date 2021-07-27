const raining = true;
const cold = false;

if(raining){

console.log("Dont't forget your umbrella!");
}
const temperature = 12; 

if(temperature<0) {
console.log("Make sure you pick out a scarf!");
}else if(temperature<15){
console.log("Short sleves won't cut it!");
} else {
console.log("Short sleves are fine.");
}

console.log("Now you are ready to go outside!");

const isCitizen = true;
const age =26;

if(isCitizen && age>18){
  console.log('You are eligible to vote.');
}

if(temperature < -40 || temperature>40){
console.log("Goining outside is great idea.");
}

if(!raining){
 console.log('No need to take umbrella!');
}
