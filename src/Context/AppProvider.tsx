import { FC, ReactNode, useReducer, createContext } from "react";

export const AppContext = createContext<any>(null);

const AppProvider: FC<{
  reducer: any;
  state: any;
  children: ReactNode;
}> = ({ reducer, state = {}, children }) => {
  const value = useReducer(reducer, state);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
