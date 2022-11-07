export let store = {
    _state: {
        appeals: [
            {id: 0, name: "", email: "", appeal: ""}
        ],
        newAppealText: ''
    },
    _callSubscriber() {
    },
/*    addAppeal(newCreatedAppeal) {
        this._state.appeals.push(newCreatedAppeal);
        this._state.newAppealText = '';
        this._callSubscriber(this._state);
    },*/
    updateNewAppealText(newText) {
        this._state.newAppealText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action){
        if(action.type === 'ADD-APPEAL'){
            this._state.appeals.push(action.newCreatedAppeal);
            this._state.newAppealText = '';
            this._callSubscriber(this._state);
        }
    },
}

window.store = store;
