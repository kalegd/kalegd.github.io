export default class InputHandler {
    constructor() {
        this._screenTouched = false;
        this._addEventListeners();
    }

    _addEventListeners() {
        //MOBILE Event Listeners
        document.addEventListener('touchstart', () => {
            this._screenTouched = true;
        });
        document.addEventListener('touchend', () => {
            this._screenTouched = false;
        });
    }

    isScreenTouched() {
        return this._screenTouched;
    }
}
