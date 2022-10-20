export const state = [
    {
        appeals: [
            {id: 0, name: "", email: "", appeal: ""}
        ]
    }


]

export const addAppeal = (props) => {
    const newAppeal = {
        id: 1,
        name: props.userNameOfAppeal,
        email: props.emailOfAppeal,
        appeal: props.appealTextOfAppeal
    };
    state.appeals.push(newAppeal);
}