import { ReactNode, createContext, useContext, useReducer } from "react";

const initialstate = {
  view: false,
  colorPalette: false,
  cardDetial: [
    {
      note: " your personal brand stand out online",
      date: "mar 8, 2023",
    },
    {
      note: "How to make your personal brand stand out online",
      date: "mar 8, 2023",
    },
    {
      note: " brand stand out online",
      date: "mar 8, 2023",
    },
    {
      note: "hello stand out online",
      date: "mar 8, 2023",
    },
    {
      note: "your hello personal brand stand out online",
      date: "mar 8, 2023",
    },
    {
      note: "How to make your personal brand stand out online",
      date: "mar 8, 2023",
    },
  ],
  filter: null,
};

const NoteContext = createContext<{ state: any; dispatch: any } | undefined>(
  undefined
);

const NoteReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CARD_VIEW":
      return { ...state, view: action.payload };
    case "COLOR_PALETTE":
      return { ...state, colorPalette: action.payload };
    case "SEARCH_FILTER":
      return {
        ...state,
        filter: state.cardDetial.filter((item: any) => {
          const regex = new RegExp(`${action.payload}`, "ig");
          return item.note.match(regex);
        }),
      };
    case "CLEAR_FILTER":
      return {
        ...state,
        filtered: null,
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
