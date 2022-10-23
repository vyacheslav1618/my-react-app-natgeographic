import {rerenderEntireTree} from "../render";

export const state =
    [
        {id: 0, name: "", email: "", appeal: ""}
    ]

export const addAppeal = (newCreatedAppeal) => {
    state.push(newCreatedAppeal);
    rerenderEntireTree(state);
}