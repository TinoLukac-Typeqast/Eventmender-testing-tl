import { IAppState, ActionTypes, Action } from './AppProvider.types';


export const appReducer = (initState: IAppState, action: Action): IAppState => {
    console.log(action)
   
    switch (action.type) {
        case ActionTypes.ADD_SUPPORT_OPTION:
            return {
                ...initState,
                support: action.payload
            };

            case ActionTypes.ADD_ATTENDEES_OPTION:
            return {
                ...initState,
                attendees: action.payload
            };
        case ActionTypes.ADD_BUDGET:
            return {
                ...initState,
                budget: action.payload,
            };
        case ActionTypes.ADD_CUSTOMIZATION_OPTION:
            return {
                ...initState,
                 customize: action.payload,
            };
        case ActionTypes.ADD_EXPERIENCE_OPTION:
            return {
                ...initState,
                experience: action.payload,
            };
        case ActionTypes.ADD_DURATION_OPTION:
            return {
                ...initState,
                duration: action.payload,
            };
        case ActionTypes.REMOVE_SUPPORT_OPTION:
            return {
                ...initState,
                support: "",
            };
        case ActionTypes.REMOVE_CUSTOMIZATION_OPTION:
            return {
                ...initState,
                customize: "",
            };
        case ActionTypes.REMOVE_EXPERIENCE_OPTION:
            return {
                ...initState,
                experience: "",
            };
        case ActionTypes.REMOVE_DURATION_OPTION:
            return {
                ...initState,
                duration: ""
            };
        case ActionTypes.REMOVE_BUDGET:
            return {
                ...initState,
                budget: ""
            };
        case ActionTypes.REMOVE_ATTENDEES_OPTION:
            return {
                ...initState,
                attendees: ""
            }
            // return {
            //     ...initState,
            //     duration: initState.duration.filter(
            //         (item: any) => item != action.payload
            //     ),
            // };
        default:
            break;
    }
    return initState;
};