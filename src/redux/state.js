export const state = {
    appeals: [
        {id: 0, name: "", email: "", appeal: ""}
    ],
    newAppealText: ''
}

function rerenderEntireTree(state) {

}

export const addAppeal = (newCreatedAppeal) => {
    state.appeals.push(newCreatedAppeal);
    state.newAppealText = '';
    rerenderEntireTree(state);
}

export const updateNewAppealText = (newText) => {
    state.newAppealText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}