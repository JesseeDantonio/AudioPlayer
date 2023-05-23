export class AudioPlayer {

    constructor(WEB_EVENT, ARRAY_PATH) {

        this.WEB_EVENT = WEB_EVENT;
        this.player = new Audio();
        this.ARRAY_PATH = ARRAY_PATH;
        //this.player.preload = "auto";
        this.player.volume = this.WEB_EVENT.getSELECT_VOLUME().value;
        this.player.src = this.ARRAY_PATH.arrayPath[0];
        this.muted = false;
        this.tempVolume = 0.0;
        this.loop = false;
        this.random = false;

    }

    getIsLoop() {
        return this.loop;
    }

    getIsRandom() {
        return this.random;
    }

    getIsMuted() {
        return this.muted;
    }

    getPlayer() {
        return this.player;
    }

    saveVolume(volume) {
        this.tempVolume = volume;
    }

    changeMusicAuto(curtime, duration) {
        if (!this.player.paused) {
            if (curtime === Math.floor(duration) || curtime === Math.ceil(duration)) {

                if (this.loop) {
                    const INDEX = this.ARRAY_PATH.getCurrentIndex();
                    this.playPause();
                    this.player.src = this.ARRAY_PATH.arrayPath[INDEX];
                    this.playPause()
                    return;
                }
                if (this.random) {
                    this.playPause();
                    this.player.src = this.ARRAY_PATH.arrayPath[this.getRandomInt()];
                    this.playPause();
                    return;
                }
                if (this.ARRAY_PATH.getCurrentIndex() == this.ARRAY_PATH.getLength()) {
                    this.playPause();
                    this.ARRAY_PATH.setCurrentIndex(0);
                    this.player.src = this.ARRAY_PATH.arrayPath[this.ARRAY_PATH.getCurrentIndex()];
                    this.playPause();
                } else {
                    this.ARRAY_PATH.nextIndex();
                    this.player.src = this.ARRAY_PATH.getArray()[this.ARRAY_PATH.getCurrentIndex()];
                    this.playPause();
                }
            }
        }
    }

    nextMusic() {
        if (this.ARRAY_PATH.getCurrentIndex() >= this.ARRAY_PATH.getLength()) {
            this.stop();
            this.playPause();
        } else {
            this.playPause();
            this.ARRAY_PATH.nextIndex();
            this.player.src = this.ARRAY_PATH.arrayPath[this.ARRAY_PATH.getCurrentIndex()];
            this.playPause();
        }
    }

    previousMusic() {
        if (this.player.currentTime <= 5) {
            if (this.ARRAY_PATH.getCurrentIndex() <= 0) {
                this.playPause();
                this.ARRAY_PATH.setCurrentIndex(this.ARRAY_PATH.getLength());
                this.player.src = this.ARRAY_PATH.arrayPath[this.ARRAY_PATH.getCurrentIndex()];
                this.playPause();
            }
            else {
                this.playPause();
                this.ARRAY_PATH.previousIndex();
                this.player.src = this.ARRAY_PATH.arrayPath[this.ARRAY_PATH.getCurrentIndex()];
                this.playPause();
            }
        } else {
            this.player.currentTime = 0;
        }
    }

    playPause() {
        if (!this.player.paused) {
            this.player.pause();
            this.WEB_EVENT.getBUTTON_PLAY_PAUSE().innerHTML = '<i class="fa fa-play"></i>';
        } else {
            this.player.play();
            this.WEB_EVENT.getBUTTON_PLAY_PAUSE().innerHTML = '<i class="fa fa-pause"></i>';
        }
    }

    stop() {
        if (this.player.paused) {
            this.player.currentTime = 0;
            this.ARRAY_PATH.setCurrentIndex(0);
            this.player.src = this.ARRAY_PATH.arrayPath[this.ARRAY_PATH.getCurrentIndex()];
            this.WEB_EVENT.getPROGRESS_BAR().value = 0;
        } else {
            this.playPause();
            this.player.currentTime = 0;
            this.ARRAY_PATH.setCurrentIndex(0);
            this.player.src = this.ARRAY_PATH.arrayPath[this.ARRAY_PATH.getCurrentIndex()];
            this.WEB_EVENT.getPROGRESS_BAR().value = 0;
        }
    }

    setPosition(position) {
        this.player.currentTime = position;
    }

    setVolume(volume) {

        if (!isNaN(volume)) {
            this.player.volume = volume;
        }

    }

    mute() {

        if (this.muted) {

            if (this.tempVolume == 0.0) {
                this.setVolume(0.1);
                this.WEB_EVENT.getSELECT_VOLUME().value = 0.1;
            } else {
                this.setVolume(this.tempVolume);
                this.WEB_EVENT.getSELECT_VOLUME().value = this.tempVolume;
            }

            this.WEB_EVENT.getBUTTON_MUTE().innerHTML = '<i class="fa fa-volume-up"></i>';

            this.muted = false;
        } else {
            this.setVolume(0.0);
            this.saveVolume(this.WEB_EVENT.getSELECT_VOLUME().value);
            this.WEB_EVENT.getSELECT_VOLUME().value = 0.0;
            this.WEB_EVENT.getBUTTON_MUTE().innerHTML = '<i class="fa fa-volume-off red-color"></i>';

            this.muted = true;
        }
    }

    selectVolumeIsMuted(volume) {
        if (volume == 0.0) {
            this.mute();
            this.WEB_EVENT.getBUTTON_MUTE().innerHTML = '<i class="fa fa-volume-off red-color"></i>';
        } else {
            this.muted = false;
            this.WEB_EVENT.getBUTTON_MUTE().innerHTML = '<i class="fa fa-volume-up"></i>';
        }
        if (!this.muted) {
            this.setVolume(volume);
        }
    }

    timeConversion(time) {
        const FORMAT = val => `0${Math.floor(val)}`.slice(-2);
        const HOURS = time / 3600;
        const MINUTES = (time % 3600) / 60;

        return [HOURS, MINUTES, time % 60].map(FORMAT).join(':');
    }

    displayTime(curtime, timeDuration) {
        this.WEB_EVENT.getINFORMATION_PLAYER().innerHTML = this.timeConversion(curtime) + " / " + this.timeConversion(timeDuration);
    }

    getRandomInt() {
        return Math.floor(Math.random() * this.ARRAY_PATH.getLength());
    }

    loopMusicSingle() {
        if (!this.loop) {
            this.loop = true;
            this.WEB_EVENT.getBUTTON_LOOP().innerHTML = "<i class='fa fa-refresh green-color'></i>";
        } else {
            this.loop = false;
            this.WEB_EVENT.getBUTTON_LOOP().innerHTML = "<i class='fa fa-refresh'></i>";
        }
    }

    randomMusic() {
        if (!this.random) {
            this.random = true;
            this.WEB_EVENT.getBUTTON_RANDOM().innerHTML = "<i class='fas fa-random green-color'></i>";
        } else {
            this.random = false;
            this.WEB_EVENT.getBUTTON_RANDOM().innerHTML = "<i class='fas fa-random'></i>";
        }
    }

    fadeOut(vol, curTime, maxTime) {
        const FADE_TIME = 5000; // 5 secondes
        const startVol = vol;
        const endVol = 0.0;
        const deltaVol = endVol - startVol;
        const startTimestamp = performance.now();
    
        function fade() {
            const timestamp = performance.now();
            const timeElapsed = timestamp - startTimestamp;
    
            if (timeElapsed < FADE_TIME) {
                vol = startVol + (deltaVol * timeElapsed / FADE_TIME);
                this.setVolume(parseFloat(vol).toFixed(2));
                requestAnimationFrame(fade);
            } else {
                vol = endVol;
                this.setVolume(parseFloat(vol).toFixed(2));
                console.log(vol.toFixed(2));
            }
        }
    
        setTimeout(() => {
            this.WEB_EVENT.getSELECT_VOLUME().disabled = true;
            this.WEB_EVENT.getBUTTON_MUTE().disabled = true;
            fade();
        }, 1000); // Attendre 1 seconde avant de commencer à baisser le volume
    }

    // fadeOut(vol, curTime, maxTime) {
    //     const INTERVAL = 50;

    //     if (curTime == (maxTime -= 12)) {
    //       this.WEB_EVENT.getSELECT_VOLUME().disabled = true;
    //       this.WEB_EVENT.getBUTTON_MUTE().disabled = true;

    //       let step = vol / (INTERVAL * 20);
    //       const INTERVAL_ID = setInterval(() => {
    //         vol -= step;
    //         // limit to 2 decimal places
    //         // also converts to string, works ok
    //         this.setVolume(parseFloat(vol).toFixed(2));
    //         console.log(vol.toFixed(2));
    //         if (vol <= 0.0) {
    //           // Stop the setInterval when 0 is reached
    //           clearInterval(INTERVAL_ID);
    //         }
    //       }, INTERVAL);
    //     }
    //   }

    fadeIn(vol, curTime) {

        const INTERVAL = 200;

        if (curTime < 5 && this.player.volume == 0.00 && !this.getIsMuted()) {

            this.WEB_EVENT.getSELECT_VOLUME().disabled = true;
            this.WEB_EVENT.getBUTTON_MUTE().disabled = true;

            // Wait for an interval before fading in
            setTimeout(() => {
                const INTERVAL_ID = setInterval(() => {

                    if (this.player.volume < this.WEB_EVENT.getSELECT_VOLUME().value) {
                        vol += 0.01;
                        // limit to 2 decimal places
                        // also converts to string, works ok
                        this.setVolume(parseFloat(vol).toFixed(2));
                        console.log(parseFloat(vol).toFixed(2));
                    } else {
                        // Stop the setInterval when 0 is reached
                        clearInterval(INTERVAL_ID);
                        this.WEB_EVENT.getSELECT_VOLUME().disabled = false;
                        this.WEB_EVENT.getBUTTON_MUTE().disabled = false;
                    }
                }, INTERVAL);
            }, INTERVAL);
        }
    }


}