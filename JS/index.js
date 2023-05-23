import { AudioPlayer } from "./AudioPlayer.js";
import { ArrayPath } from "./ArrayPath.js";
import { WebEvent } from "./WebEvent.js";

const ARRAY_PATH = new ArrayPath();
const WEB_EVENT = new WebEvent();
const AUDIO_PLAYER = new AudioPlayer(WEB_EVENT, ARRAY_PATH);

WEB_EVENT.getBUTTON_PLAY_PAUSE().addEventListener('click', (event) => {
    AUDIO_PLAYER.playPause();
})
WEB_EVENT.getBUTTON_STOP().addEventListener('click', (event) => {
    AUDIO_PLAYER.stop();
})
WEB_EVENT.getBUTTON_FORWARD().addEventListener('click', (event) => {
    AUDIO_PLAYER.nextMusic();
})
WEB_EVENT.getBUTTON_BACK().addEventListener('click', (event) => {
    AUDIO_PLAYER.previousMusic();
})
WEB_EVENT.getBUTTON_LOOP().addEventListener('click', (event) => {
    AUDIO_PLAYER.loopMusicSingle();
})
WEB_EVENT.getBUTTON_RANDOM().addEventListener('click', (event) => {
    AUDIO_PLAYER.randomMusic();
})
WEB_EVENT.getBUTTON_MUTE().addEventListener('click', (event) => {
    AUDIO_PLAYER.mute();
})
WEB_EVENT.getSELECT_VOLUME().addEventListener('input', (event) => {
    AUDIO_PLAYER.selectVolumeIsMuted(WEB_EVENT.getSELECT_VOLUME().value);
})
WEB_EVENT.getPROGRESS_BAR().addEventListener('input', (event) => {
    AUDIO_PLAYER.setPosition(WEB_EVENT.getPROGRESS_BAR().value);
})

AUDIO_PLAYER.getPlayer().addEventListener('timeupdate', function () {

    const CURRENT_TIME = parseInt(AUDIO_PLAYER.getPlayer().currentTime, 10);
    const MAX_TIME = parseInt(WEB_EVENT.getPROGRESS_BAR().max, 10);

    WEB_EVENT.getPROGRESS_BAR().max = AUDIO_PLAYER.getPlayer().duration;
    WEB_EVENT.getPROGRESS_BAR().value = CURRENT_TIME;

    AUDIO_PLAYER.displayTime(CURRENT_TIME, WEB_EVENT.getPROGRESS_BAR().max);

    AUDIO_PLAYER.changeMusicAuto(CURRENT_TIME, WEB_EVENT.getPROGRESS_BAR().max);

    AUDIO_PLAYER.fadeOut(WEB_EVENT.getSELECT_VOLUME().value, CURRENT_TIME, MAX_TIME);
    AUDIO_PLAYER.fadeIn(WEB_EVENT.getSELECT_VOLUME().value, CURRENT_TIME);
});