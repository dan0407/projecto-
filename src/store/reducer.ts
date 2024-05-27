export const reducer = (currentAction: any, currentState: any) => {
    const { action, payload } = currentAction;
    
    switch (action) {
        case "NAVIGATE":
            currentState.screen = payload
        break;

        case "GETUSERDATA":
            console.log("User Data")
            console.log(payload)
            currentState.userdata = payload
            break; 

        case "SETUSER":
            currentState.user = payload
            break; 
    }

    return currentState;
}