
prediction1="";
prediction2="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>"
    });
}
console.log("ml5version-"+ml5.version);
classifier=ml5.imageClassifier("/teachablemachine.withgoogle.com/models/qDnJw7I83/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1="The first prediction is"+prediction1;
    speakData2="The second prediction is"+prediction2;
    var utterThis=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utterThis);
}