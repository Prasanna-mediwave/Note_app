import { ReactNode, createContext, useContext, useReducer } from "react";

const initialstate = {
  view: false,
};

const NoteContext = createContext<{ state: any; dispatch: any } | undefined>(
  undefined
);

const NoteReducer = (state: any, action: any) => {
  switch (action.type) {
    case "HANDLE_BOOL_INPUT":
      return { ...state, view: action.payload };
    default:
      return state;
  }
};

export const NoteProvider=({children}:{children:ReactNode})=>{
    const [state,dispatch]=useReducer<any>(NoteReducer,initialstate)

    return(
        <NoteContext.Provider value={{state,dispatch}}>
            {children}
        </NoteContext.Provider>
    )
}
export const useNote=()=>{
    const context = useContext(NoteContext)
    if(!context)throw new Error('UseNote must be used')
    return context
}