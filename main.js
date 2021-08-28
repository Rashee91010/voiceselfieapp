var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var textbox = document.getElementById("textbox");
function start() {
    textbox.innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    textbox.innerHTML = content;
    speak();
}
function speak() {
    var synth = window.speechSynthesis;
    speakdata = document.getElementById("textbox").value;
    var utter = new SpeechSynthesisUtterance(speakdata);
    if (speakdata == "take my selfie") {
        var utter = new SpeechSynthesisUtterance("taking you a selfie in five seconds");
        synth.speak(utter);
        Webcam.attach(camera);
        camera = document.getElementById("camera");

        Webcam.set({
            width: 350,
            height: 250,
            image_format: "png",
            png_quality: 90
        });
        setTimeout(function () {
            takeselfie();
            save();
        }, 5000);

    }
    synth.speak(utter);
}
function takeselfie(){
    Webcam.snap(function(photo){
    document.getElementById("result").innerHTML="<img id='selfie' src='"+photo+"'/>";
    });
}
function save()
{
    link=document.getElementById("link");
    image=document.getElementById("selfie").src;
    link.href=image;
    link.click();
}

