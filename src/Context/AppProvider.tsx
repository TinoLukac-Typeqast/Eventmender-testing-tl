import { FC, ReactNode, useReducer, createContext } from "react";

import { IAppState } from "./Reducers/App/AppProvider.types";
import { initState } from "./Reducers/App/AppReducer";

export const AppContext = createContext<any>({
  contexState: initState,
  dispach: (action: any) => {},
});

interface StateObj extends IAppState {}

const AppProvider: FC<{
  reducer: any;
  state: StateObj;
  children: ReactNode;
}> = ({ reducer, state, children }) => {
  const value = useReducer(reducer, state);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
