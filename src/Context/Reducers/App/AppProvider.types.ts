// STATE
export interface IAppState {
    duration: string,
    experience: string,
    customize: string,
    support: string,
    budget: string,
    attendees: string
}
// END :: STATE

// TYPES
export enum ActionTypes {
    ADD_SUPPORT_OPTION = "ADD_SUPPORT_OPTION",
    ADD_BUDGET = "ADD_BUDGET",
    ADD_ATTENDEES_OPTION="ADD_ATTENDEES_OPTION",
    ADD_CUSTOMIZATION_OPTION = "ADD_CUSTOMIZATION_OPTION",
    ADD_EXPERIENCE_OPTION = "ADD_EXPERIENCE_OPTION",
    ADD_DURATION_OPTION = "ADD_DURATION_OPTION",
    REMOVE_BUDGET = "REMOVE_BUDGET", 
    REMOVE_CUSTOMIZATION_OPTION = "REMOVE_CUSTOMIZATION_OPTION",
    REMOVE_EXPERIENCE_OPTION = "REMOVE_EXPERIENCE_OPTION",
    REMOVE_DURATION_OPTION = "REMOVE_DURATION_OPTION",
    REMOVE_ATTENDEES_OPTION = "REMOVE_ATTENDEES_OPTION", 
    REMOVE_SUPPORT_OPTION = "REMOVE_SUPPORT_OPTION", 
}
// END :: TYPES

// ACTIONS
export type Action =
    { type: ActionTypes.ADD_SUPPORT_OPTION, payload: any } |
    { type: ActionTypes.ADD_BUDGET, payload: any } |
    { type: ActionTypes.ADD_CUSTOMIZATION_OPTION, payload: any } |
    { type: ActionTypes.ADD_EXPERIENCE_OPTION, payload: any } |
    { type: ActionTypes.ADD_DURATION_OPTION, payload: any } |
    { type: ActionTypes.ADD_ATTENDEES_OPTION, payload: any }|
    { type: ActionTypes.REMOVE_SUPPORT_OPTION, payload: any } |
    { type: ActionTypes.REMOVE_CUSTOMIZATION_OPTION, payload: any } |
    { type: ActionTypes.REMOVE_EXPERIENCE_OPTION, payload: any } |
    { type: ActionTypes.REMOVE_DURATION_OPTION, payload: any } | 
    { type: ActionTypes.REMOVE_ATTENDEES_OPTION, payload: any } |
    { type: ActionTypes.REMOVE_BUDGET, payload: any }
    
// END :: ACTIONS