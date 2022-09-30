import { ActionTypes } from "../../Context/Reducers/App/AppProvider.types";

export const addActionTypeHandler = (name: string) => {
    switch (name) {
      case "Duration":
        return ActionTypes.ADD_DURATION_OPTION;
      case "Support":
        return ActionTypes.ADD_SUPPORT_OPTION;
      case "Experience":
        return ActionTypes.ADD_EXPERIENCE_OPTION;
      case "Attendees":
        return ActionTypes.ADD_ATTENDEES_OPTION;
      case "Customize":
        return ActionTypes.ADD_CUSTOMIZATION_OPTION;
      case "Budget":
        return ActionTypes.ADD_BUDGET;
  
      default:
        break;
    }
  };
  
 export const removeActionTypeHandler = (name: string) => {
    switch (name) {
      case "Duration":
        return ActionTypes.REMOVE_DURATION_OPTION;
      case "Support":
        return ActionTypes.REMOVE_SUPPORT_OPTION;
      case "Experience":
        return ActionTypes.REMOVE_EXPERIENCE_OPTION;
      case "Attendees":
        return ActionTypes.REMOVE_ATTENDEES_OPTION;
      case "Customize":
        return ActionTypes.REMOVE_CUSTOMIZATION_OPTION;
      case "Budget":
        return ActionTypes.REMOVE_BUDGET;
  
      default:
        break;
    }
  };