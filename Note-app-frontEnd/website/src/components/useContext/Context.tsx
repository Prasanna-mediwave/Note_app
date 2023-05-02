import { ReactNode, createContext, useContext, useReducer } from "react";

const initialstate = {
  view: false,
  colorPalette: false,
  viewDetial: false,
  cardDetial: [],
  filter: null,
  cardColor: [
    { bg: "#FFFFFF", opacity: "16%", color: "" },
    { bg: "#FFA186", opacity: "", color: "" },
    { bg: "#FFC575", opacity: "", color: "" },
    { bg: "#E2EB90", opacity: "", color: "" },
    { bg: "#A5F982", opacity: "", color: "" },
    { bg: "#75D9E7", opacity: "", color: "" },
    { bg: "#E775DA", opacity: "", color: "" },
    { bg: "#759EFF", opacity: "", color: "" },
    { bg: "#FFFFFF", opacity: "", color: "#212121" },
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
