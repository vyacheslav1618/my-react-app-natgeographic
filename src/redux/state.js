export const state =
    [
        {id: 0, name: "", email: "", appeal: ""}
    ]

export const addAppeal = (newCreatedAppeal) => {
    state.push(newCreatedAppeal);
    console.log(state);
    debugger
}