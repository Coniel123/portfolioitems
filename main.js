function playAudio() {
    var audio = document.getElementById('audio1');
    if(audio.paused){
        audio.play();
    } else {
        audio.pause();
    }
}