const Session = (state = {
    'session': null
}, action) => {

    switch (action.type) {
        case "SET_SESSION":
            /* give me all the properties of state  => ...state */
            state = {
                ...state,
                /* viene fatto l'ovverride delle proprieta dello stesso nome, in questo caso sono due*/
                session: action.payload
            };
            break;
    }
    return state;
};

export default Session;