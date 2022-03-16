img1 = "" ;
img2 = "" ;
img3 = "" ;

function preload(){
img1 = loadImage("download.jpg");
img2 = loadImage("download (1).jpg");
img3 = loadImage("images.jpg");
}

function setup(){
    classifier = ml5.imageClassifier("MobileNet", modelLoaded);
}

function modelLoaded(){
    console.log("MOBILE NET IS INITIALIZED");
}

function draw(){
    classifier.classify(img1,result1);
    classifier.classify(img2,result2);
    classifier.classify(img3,result3);
}

function result1(error,results){
    console.log("hello 1");
if(error){
    console.error(error);
}
else{
console.log(results);
document.getElementById("ans1").innerHTML = results[0].label ;
}
}


function result2(error,results){
    console.log("hello 2");
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("ans2").innerHTML = results[0].label ;
    }
    }

    
function result3(error,results){
    console.log("hello 3");
    if(error){
        console.error(error);
    }
    else{
    console.log(results);
    document.getElementById("ans3").innerHTML = results[0].label ;
    }
    }