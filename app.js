//Loop through the following array and count how many "computers" there are. Log the final count:

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
var count =0;
for (var items of officeItems){
count = (items == "computer") ? count+1:count;
}
console.log(count);

//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ];

  for(var people of peopleWhoWantToSeeMadMaxFuryRoad){
   if(people.gender=='male'){
   var response = (people.age >= 18) ? `${people.name} is old enough to watch, he will love it.` : `${people.name} is not old enough to watch, dont let him in.`;
   }
   else{
    var response = (people.age >= 18) ? `${people.name} is old enough to watch, she will love it.` : `${people.name} is not old enough to watch, dont let her in.`;
   }
   console.log(response);
  }

 // The light is off to start with. Log to the console whether or not the light is on at the end.
var firstarray = [2, 5, 435, 4, 3]; // "The light is on"
var secondarray =  [1, 1, 1, 1, 3];   // "The light is on"
var thirdarray =  [9, 3, 4, 2];      // "The light is off"
var light = false;


console.log(`The light is ${onOrOff(firstarray)}.`);
console.log(`The light is ${onOrOff(secondarray)}.`);
console.log(`The light is ${onOrOff(thirdarray)}.`);
function onOrOff (array){
  var sum =0;
    for(var numbers of array){
      sum+= numbers;
    }
    var result = (sum%2>0)? "on" : "off";
return result;
}



