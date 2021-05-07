const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;
var greetingPhrase;


function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup() {
    var canvas = createCanvas(1200, 700);
    engine = Engine.create();
    world = engine.world;

}

function draw() {
    // add condition to check if any background image is there to add
    if (backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(35)
    fill("black")
    text("Time: " + hour + ":" + minute, 30, 70)
    getGreetingPhrase()

}

async function getGreetingPhrase() {
    if (hour >= 00 && hour <= 12) {
        text("Good Morning!", 30, 120)
    } else if (hour >= 12 && hour <= 17) {
        text("Good Afternoon!", 30, 120)
    } else {
    text("Good Evening!", 30, 120)
    }
}

async function getBackgroundImg() {

    // write code to fetch time from API

    var response = await fetch("http://www.worldtimeapi.org/api/timezone/America/Los_Angeles")

    //change the data in JSON format
    var responseType = await response.json()
    // write code slice the datetime
    var DT = responseType.datetime
    hour = DT.slice(11, 13)
    minute = DT.slice(14, 16)
    console.log(hour)
    console.log(minute)


    // add conditions to change the background images from sunrise to sunset
    if (hour >= 04 && hour <= 06) {
        bg = "sunrise1.png";
    } else if (hour >= 06 && hour <= 08) {
        bg = "sunrise2.png";

    } else if (hour >= 08 && hour <= 10) {
        bg = "sunrise3.png";

    } else if (hour >= 10 && hour <= 12) {
        bg = "sunrise4.png";

    } else if (hour >= 14 && hour <= 16) {
        bg = "sunrise5.png";

    } else if (hour >= 16 && hour <= 18) {
        bg = "sunrise6.png";

    } else if (hour >= 18 && hour <= 20) {
        bg = "sunset7.png";

    } else if (hour >= 20 && hour <= 22) {
        bg = "sunset8.png";

    } else if (hour >= 22 && hour <= 23) {
        bg = "sunset9.png";

    } else if (hour >= 23 && hour <= 0) {
        bg = "sunrise10.png";

    } else if (hour >= 0 && hour <= 03) {
        bg = "sunrise11.png";

    } else {
        bg = "sunrise12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);

}




