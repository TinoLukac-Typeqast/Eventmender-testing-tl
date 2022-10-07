export const currencyReducer = (initState:any, action: any): any=> {
    
    switch (action.type) {
        case "CURRENCY":
            return {     
                ...initState,       
                ...action.payload   
            };

        default:
            break;
    }
    return initState;
};