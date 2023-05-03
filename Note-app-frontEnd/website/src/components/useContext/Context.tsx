import { ReactNode, createContext, useContext, useReducer } from "react";

const initialstate = {
  view: false,
  colorPalette: false,
  viewDetial: false,
  cardDetial: [],
  filter: null,
  cardColor: [
    { bg: "#ffffff28 " },
    { bg: "#FFA186" },
    { bg: "#FFC575" },
    { bg: "#E2EB90" },
    { bg: "#A5F982" },
    { bg: "#75D9E7" },
    { bg: "#E775DA" },
    { bg: "#759EFF" },
    { bg: "#FFFFFF" },
  ],
};

const NoteContext = createContext<{ state: any; dispatch: any } | undefined>(
  undefined
);

const NoteReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INPUT_HANDLER":
      return { ...state, [action.field]: action.payload };
    case "SEARCH_FILTER":
      return {
        ...state,
        filter: state.cardDetial.filter((item: any) => {
          const regex = new RegExp(`${action.payload}`, "ig");
          console.log(regex, "<<<<<>>>>>>>>");
          console.log(state.cardDetial);

          return item.note.match(regex);
        }),
      };
    default:
      return state;
  }
};

export const NoteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer<any>(NoteReducer, initialstate);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) throw new Error("UseNote must be used");
  return context;
};
