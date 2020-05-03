import global from './global.js';

export default class InputHandler {
    constructor() {
        this._keysPressed = new Set();
        this._screenTouched = false;
        this._addEventListeners();
    }

    _addEventListeners() {
        //POINTER Event Listeners
        document.addEventListener('keydown', (event) => {
            this._keysPressed.add(event.code);
        });
        document.addEventListener('keyup', (event) => {
            this._keysPressed.delete(event.code);
        });
        if(global.isChrome) {
            document.addEventListener('pointerlockchange', (event) => {
                if(!global.sessionActive) this._keysPressed.clear();
            });
        }

        //MOBILE Event Listeners
        document.addEventListener('touchstart', () => {
            this._screenTouched = true;
        });
        document.addEventListener('touchend', () => {
            this._screenTouched = false;
        });
    }

    isKeyPressed(code) {
        return this._keysPressed.has(code);
    }

    isScreenTouched() {
        return this._screenTouched;
    }
}
