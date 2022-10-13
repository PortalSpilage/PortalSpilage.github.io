var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "Cooper Campisi is a big fat lard who weighs 300 pounds so :insertx: he went for a walk.  :inserty:, during his walk a beautiful girl complimeted his fatness :insertz:. to coopers suprise that had never happened to him — :insertx: he then strutted of into the sunster more confidnet than ever before.";

var insertx = ["Cooper the legend","Big Daddy","Mcdonalds"];

var inserty = ["all you can eat buffet","rehab","the brown House"];

var insertz = ["fatness exploded","his blubber melted off of him", "then turned into a slug and crawled away"];


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);


function result() {
    var newStory = storyText;

var xItem;
var yItem;
var zItem;

xItem = randomValueFromArray(insertx);
yItem = randomValueFromArray(inserty);
zItem = randomValueFromArray(insertz);

newStory = newStory.replace(":insterx:", xItem);
newStory = newStory.replace(":inserty:", yItem);
newStory = newStory.replace(":insertz:", zItem);
    


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + "stones";
    const temperature =  Math.round(94);
    var newStory = newStory.replace('300 pounds', weight);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}