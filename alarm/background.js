
var timerID = setInterval(() => {
    // logic
    var myAudio = new Audio(chrome.runtime.getURL("./You-Suffer-(Napalm Death).mp3"));
    myAudio.play();
}, 5000)