status="";
objects=[];
pc="";
function preload(){
    pc=loadImage("istockphoto-1190641416-170667a.jpg");
}
function setup(){
    canvas=createCanvas(650,450);
    canvas.center();
    Detectobjects=ml5.objectDetector("cocossd",modeloaded);
    document.getElementById("Images").innerHTML="Objected Detected: Detecting";
}
function modeloaded()
{
    console.log("Model Loaded!");
    status=true;
    Detectobjects.detect(pc,gotresult);
}
function gotresult(error,result){
    if(error){
        console.error(error);
    }
    console.log(result); 
    objects=result;
    }
    
    function draw(){
        image(pc,0,0,650,450);
        if(status != ""){
    for(i=0;i<objects.length;i++){
                document.getElementById("Images").innerHTML="Object Detected : Detected";
                fill("#f54242");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+ " "+percent+" %",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#b6f542");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
            }
        }
       
    }