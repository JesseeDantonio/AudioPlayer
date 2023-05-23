export class ArrayPath {

    constructor() {

        this.arrayPath = [

            './ASSETS/MUSIC/gigi-dagostino-vize-emotik-never-be-lonely.mp3',
            './ASSETS/MUSIC/LXSTCXNTURY-ODIUM.mp3',
            './ASSETS/MUSIC/Halsey-BALENCIAGA.mp3',
            './ASSETS/MUSIC/DarkSignal-DragMeToHell.mp3'

        ];

        this.currentIndex = 0;

    }

    getArray() {
        return this.arrayPath;
    }

    nextIndex() {
        this.currentIndex += 1;
    }

    previousIndex() {
        this.currentIndex -= 1;
    }

    getCurrentIndex() {
        console.log(this.currentIndex);
        return this.currentIndex;
    }

    setCurrentIndex(newIndex) {
        this.currentIndex = newIndex;
    }
    
    getLength() {
        return this.arrayPath.length - 1;
    }

    addPath(newPath) {
        this.arrayPath.push(newPath);
    }

    removePath() {

    }


}