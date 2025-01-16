import { createSlice } from "@reduxjs/toolkit";

const getFromLocalStorage = (key) => {
  const keyData = localStorage.getItem(key);

  return keyData ? JSON.parse(keyData) : [];
};

const setToLocalStorage = (state) => {
  localStorage.setItem("notes", JSON.stringify(state.notes));
  localStorage.setItem("archived", JSON.stringify(state.archived));
  localStorage.setItem("trash", JSON.stringify(state.trash));
};

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: getFromLocalStorage("notes"),
    archived: getFromLocalStorage("archived"),
    trash: getFromLocalStorage("trash"),
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.unshift(action.payload);
      setToLocalStorage(state);
    },
    addToArchive: (state, action) => {
      let noteToArchive = state.notes.find(
        (note) => note.id === action.payload
      );
      if (noteToArchive) {
        state.archived.unshift(noteToArchive);
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      }
      setToLocalStorage(state);
    },
    RecoverFromArchive: (state, action) => {
      let noteToArchive = state.archived.find(
        (note) => note.id === action.payload
      );
      if (noteToArchive) {
        state.notes.unshift(noteToArchive);
        state.archived = state.archived.filter(
          (note) => note.id !== action.payload
        );
      }
      setToLocalStorage(state);
    },
    addToTrash: (state, action) => {
      let trashingFrom = action.payload.from;
      let noteToTrash =
        trashingFrom === "notes"
          ? state.notes.find((note) => note.id === action.payload.id)
          : state.archived.find((note) => note.id === action.payload.id);

      if (noteToTrash) {
        state.trash.unshift({ ...noteToTrash, from: trashingFrom });
        if (trashingFrom === "notes") {
          state.notes = state.notes.filter(
            (note) => note.id !== action.payload.id
          );
        } else {
          state.archived = state.archived.filter(
            (note) => note.id !== action.payload.id
          );
        }
      }
      setToLocalStorage(state);
    },
    RecoverFromTrash: (state, action) => {
      let noteToRecover = state.trash.find(
        (note) => note.id === action.payload
      );

      if (noteToRecover) {
        let to = noteToRecover.from;
        delete noteToRecover.from;
        if (to === "notes") {
          state.notes.unshift(noteToRecover);
        } else {
          state.archived.unshift(noteToRecover);
        }
      }

      state.trash = state.trash.filter((note) => note.id !== action.payload);
      setToLocalStorage(state);
    },
    Delete: (state, action) => {
      state.trash = state.trash.filter((note) => note.id !== action.payload);
      setToLocalStorage(state);
    },
    Pin: (state, action) => {
      let n = state.notes.map((note) =>
        note.id === action.payload ? { ...note, pinned: !note.pinned } : note
      );
      state.notes = n;
      setToLocalStorage(state);
    },
  },
});

export const {
  addNote,
  addToArchive,
  addToTrash,
  RecoverFromArchive,
  RecoverFromTrash,
  Delete,
  Pin,
} = notesSlice.actions;

export default notesSlice.reducer;
