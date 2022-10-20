export const state =
    [
        {id: 0, name: "", email: "", appeal: ""}
    ]

export const addAppeal = (appealTextOfAppeal) => {
    console.log(appealTextOfAppeal);
    const newAppeal = {
        id: 1,
        name: "John Doe",
        email: "email@mail.ru",
        appeal: appealTextOfAppeal
    };
    state.push(newAppeal);
}