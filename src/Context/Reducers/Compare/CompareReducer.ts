export const compareReducer = (initState:string[], action: any): any=> {
    
    switch (action.type) {
      
        case "ADD_COMPARE_ARRAY":
            return {...action.payload};
    
        default:
            break;
    }
    return initState;
};