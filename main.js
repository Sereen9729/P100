var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start()
}
recognition.onresult=function run(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content=="take my selfie")
    {
        console.log("take my selfie")
    
    speak();
    }
}
function speak()
{
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis)
    Webcam.attach(camera);
    setTimeout(function(){
        save();
        take_snapshot();
    },5000)
    
 camera= document.getElementById("camera");
 
Webcam.set({

    width:320,
    height:240,
    image_format:'png',
    png_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        // display in page 
        document.getElementById("results").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
link.href=image;
link.click();
}