export const compareReducer = (initState:string[], action: any): any=> {
    
    switch (action.type) {
        case "REMOVE_COMPARE_ITEM":
            return initState.filter((val) => val !== action.payload);

        case "ADD_COMPARE_ITEM":
            return [...initState, action.payload];
    
        default:
            break;
    }
    return initState;
};