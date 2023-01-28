music_one="";
music_two="";

leftWristX=0;
rightWristX=0;
leftWristY=0;
rightWristY=0;

intialize=ml5.poseNet(webcam, modelLoaded);

intialize.on("pose", gotPoses);

function modelLoaded(){
    console.log("The model has offically loaded!!");
}

function preload(){
music_one=loadSound("music.mp3");
music_two=loadSound("music2.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
webcam=createCapture(VIDEO);
webcam.hide();
}

function draw(){
    image(webcam,0,0,600,500);
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
    }
}
