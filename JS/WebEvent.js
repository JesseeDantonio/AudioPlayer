export class WebEvent {

    constructor() {
        // Events
        this.INFORMATION_PLAYER = document.getElementById('information-player');
        this.BUTTON_STOP = document.getElementById('button_stop');
        this.BUTTON_LOOP = document.querySelector('#button_loop');
        this.BUTTON_PLAY_PAUSE = document.getElementById('button_play_pause');
        this.BUTTON_MUTE = document.getElementById('button_mute');
        this.BUTTON_BACK = document.getElementById('button_back');
        this.BUTTON_FORWARD = document.getElementById('button_forward');
        this.SELECT_VOLUME = document.getElementById('volume');
        this.PROGRESS_BAR = document.getElementById('seek');
        this.BUTTON_RANDOM = document.getElementById('button_random');
    }

    getBUTTON_RANDOM() {
        return this.BUTTON_RANDOM;
    }

    getPROGRESS_BAR() {
        return this.PROGRESS_BAR;
    }

    getSELECT_VOLUME() {
        return this.SELECT_VOLUME;
    }

    getBUTTON_FORWARD() {
        return this.BUTTON_FORWARD;
    }

    getINFORMATION_PLAYER() {
        return this.INFORMATION_PLAYER;
    }

    getBUTTON_STOP() {
        return this.BUTTON_STOP;
    }

    getBUTTON_LOOP() {
        return this.BUTTON_LOOP;
    }

    getBUTTON_PLAY_PAUSE() {
        return this.BUTTON_PLAY_PAUSE;
    }

    getBUTTON_MUTE() {
        return this.BUTTON_MUTE;
    }

    getBUTTON_BACK() {
        return this.BUTTON_BACK;
    }
}