song="";
left_wrist_x=0;
left_wrist_y=0;
right_wrist_x=0;
right_wrist_y=0;

function preload()
{
    sound= loadSound(); // I'll add this later
}

function setup()
{
    canvas = createCanvas(600, 500)
    canvas.center();

    video= createCapture(VIDEO)
    video.hide();

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw()
{
    image(video, 0 ,0 ,600, 500);
}


function modelLoaded()
{
    console.log("Posenet is initialized");
}

function gotPoses(results)
{
    if (results.length>0)
    {
        console.log(results);
        left_wrist_x= results[0].pose.leftWrist.x;
        left_wrist_y= results[0].pose.leftWrist.y;
        right_wrist_x= results[0].pose.rightWrist.x;
        right_wrist_y= results[0].pose.rightWrist.y;
        console.log("left wrist x= " + left_wrist_x + " left wrist y= " + left_wrist_y);
        console.log("right wrist x= " + right_wrist_x + " right wrist y= " + right_wrist_y);
    }
}
