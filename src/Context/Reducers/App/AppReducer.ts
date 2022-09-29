import { IAppState, ActionTypes, Action } from './AppProvider.types';

export const initState: IAppState = {
    duration: null,
    experience: [],
    customization: [],
    support: [],
    budget: '',
    attendees: '',
};

export const appReducer = (initState: IAppState, action: Action): IAppState => {
    console.log(action)
    switch (action.type) {
        case ActionTypes.ADD_SUPPORT_OPTION:
            return {
                ...initState,
                support: [action.payload, ...initState.support],
            };
        case ActionTypes.ADD_BUDGET:
            return {
                ...initState,
                budget: action.payload,
            };
        case ActionTypes.ADD_CUSTOMIZATION_OPTION:
            return {
                ...initState,
                customization: [action.payload, ...initState.customization],
            };
        case ActionTypes.ADD_EXPERIENCE_OPTION:
            return {
                ...initState,
                experience: [action.payload, ...initState.experience],
            };
        case ActionTypes.ADD_DURATION_OPTION:
            return {
                ...initState,
                duration: action.payload,
            };
        case ActionTypes.REMOVE_SUPPORT_OPTION:
            return {
                ...initState,
                support: initState.support.filter(
                    (item: any) => item != action.payload
                ),
            };
        case ActionTypes.REMOVE_CUSTOMIZATION_OPTION:
            return {
                ...initState,
                customization: initState.customization.filter(
                    (item: any) => item != action.payload
                ),
            };
        case ActionTypes.REMOVE_EXPERIENCE_OPTION:
            return {
                ...initState,
                experience: initState.experience.filter(
                    (item: any) => item != action.payload
                ),
            };
        case ActionTypes.REMOVE_DURATION_OPTION:
            return {
                ...initState,
                duration: action.payload
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