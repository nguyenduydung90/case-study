class Sound {
    constructor(sound) {
        this.sound = sound
    }

    getSound() {
        return this.sound
    }

    stopSound() {
        return this.sound.pause
    }
}


let sound = "<audio autoplay>" +
    '<source src="sound/a.mp3" type="audio/mpeg">' +
    '</audio>';

let sounD = "<audio autoplay>" +
    '<source src="sound/dung.ogg" type="audio/mpeg">' +
    '</audio>';
let souND = "<audio autoplay>" +
    '<source src="sound/sai.ogg" type="audio/mpeg">' +
    '</audio>';

let winSound= "<audio autoplay>" +
    '<source src="sound/C15_dung.ogg" type="audio/mpeg">' +
    '</audio>';

let sound1 = new Sound(sound);
let soundCorect = new Sound(sounD);
let soundWrong = new Sound(souND);
let win= new Sound(winSound)
let a = document.getElementById('sound')
a.innerHTML = sound1.getSound();
