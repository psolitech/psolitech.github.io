class Queue {
  constructor() {
    this.queue = [];
  }
  
  add(element) {
    this.queue.push(element);
  }
  
  remove() {
    return this.queue.shift();
  }
}

var story;
var entries;
var words = new Queue();

var story1 = ["This weekend I am going camping with ",
  ". I packed my lantern, sleeping bag, and ",
  ". I am so ",
  " to ",
  " in a tent. I am ",
  " we might see a ",
  ", they are kind of dangerous. We are going to hike, fish, and ",
  ". I have heard that the ",
  " lake is great for ",
  ". Then we will ",
  " hike through the forest for ",
  " ",
  ". If I see a ",
  " ",
  " while hiking, I am going to bring it home as a pet! At night we will tell ",
  " ",
  " stories and roast ",
  " around the campfire!!"];

var story2 = ["It was about ",
  " ",
  " ago when I came to the hospital in a ",
  ". The hospital is a/an ",
  " place, there are a lot of ",
  " ",
  " here. There are nurses here who have ", 
  " ",
  ". If someone wants to come into my room I told them that they have to ",
  " first. I have decorated my room with ",
  " ",
  ". Today a doctor came into my room and they were wearing a ",
  " on their ",
  ". I heard that all doctors ",
  " ",
  " every day for breakfast. The most ",
  " thing about being in the hospital is the ",
  " ",
  "!"]

var story3 = ["Dear ",
  ", I am writing to you from a ",
  " castle in an enchanted forest. I found myself here one day after going for a ride on a ",
  " ",
  " in ",
  ". There are ",
  " ",
  " and ",
  " ",
  " here! In the ",
  " there is a pool full of ",
  ". I fall asleep each night on a ",
  " of ",
  " and dream of ",
  " ",
  ". It feels as though I have lived here for ",
  " ",
  ". I hope one day you can visit, although the only way to get here now is ",
  " on a ",
  " ",
  "!!"]; 

var entries1 = ["Proper Noun (Person's Name)","Noun","Adjective (Feeling)","Verb","Adjective (Feeling)","Animal","Verb","Color","Verb (ending in ing)","Adverb (ending in ly)","Number","Measure of Time","Color","Animal","Number","Silly Word","Noun"];
var entries2 = ["Number", "Measure of time", "Mode of Transportation", "Adjective", "Adjective", "Noun", "Color", "Part of the Body", "Verb", "Number", "Noun", "Noun", "Part of the Body", "Verb", "Noun", "Adjective", "Silly Word", "Noun"];
var entries3 = ["Proper Noun (Person’s Name)", "Adjective", "Color", "Animal", "Place", "Adjective", "Magical Creature (Plural)", "Adjective", "Magical Creature (Plural)", "Room in a House", "Noun", "Noun", "Noun", "Adjective", "Noun (Plural)", "Number", "Measure of time", "Verb (ending in ing)", "Adjective", "Noun"];

function story(n) {
  if(n===1) {
    story = story1;
    entries = entries1;
  } else if (n===2) {
    story = story2;
    entries = entries2;
  } else {
    story = story3;
    entries = entries3
  }
  
  document.getElementById("main").innerHTML = entries.shift() + " <input type='text' id=fill><button onclick='next()'>Next</button>";
}

function next() {
  words.add(getText());
  if(entries.length > 1) {
    document.getElementById("main").innerHTML = entries.shift() + " <input type='text' id=fill><button onclick='next()'>Next</button>";
  } else {
    document.getElementById("main").innerHTML = entries.shift() + " <input type='text' id=fill><button onclick='finish()'>Next</button>";
  }
}

function finish() {
  words.add(getText());
  
  document.getElementById("main").innerHTML = "";
  while(story.length > 0) {
    document.getElementById("main").innerHTML += story.shift();
    if(words.queue.length > 0) {
      document.getElementById("main").innerHTML += words.remove();
    }
  }
  //document.getElementById("main").innerHTML += "<br><br><button onclick='reset()'>Pick another story</button>";
}


//function reset() {
//  document.getElementById("main").innerHTML = "Choose a Story"+
//    "<br><button onclick='story(1)'>Story 1</button>"+
//    "<br><button onclick='story(2)'>Story 2</button>"+
//    "<br><button onclick='story(3)'>Story 3</button>";
//}
