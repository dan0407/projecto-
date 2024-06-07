export const reducer = (currentAction: any, currentState: any) => {
<<<<<<< HEAD
    const { type, payload } = currentAction;

    switch (type) {
        case "NAVIGATE":
            currentState.screen = payload
        break;
=======
    const { action, payload } = currentAction;
    
    switch (action) {
        case "NAVIGATE":
            currentState.screen = payload
        break;

        case "GETUSERDATA":
            currentState.userdata = payload
            break; 

        case "SETUSER":
            currentState.user = payload
            break; 
>>>>>>> ayuda
    }

    return currentState;
}