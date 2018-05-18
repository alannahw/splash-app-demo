import * as types from "./actionTypes";
import { getDefaultNote } from "../util";
import _ from "lodash";

// Notes
export function setNotes(notes) {
  return { type: types.SET_NOTES, notes };
}
export function notesIsLoading(bool) {
  return { type: types.NOTES_IS_LOADING, isLoading: bool };
}
export function fetchNotesData(userId) {
  return async dispatch => {
    dispatch(notesIsLoading(true));
    const response = await fetch("exampleNotes.json");
    if (!response.ok) {
      throw Error(response.statusText);
    }
    dispatch(notesIsLoading(false));
    const notes = await response.json();
    const userNotes = notes.filter(n => n.userId === userId);
    dispatch(setNotes(userNotes));
  };
}
export function createNote(userId) {
  //return async dispatch => {
  // const data = getDefaultNote(userId);
  // const response = await fetch("/notes", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json;charset=UTF-8" },
  //   body: JSON.stringify(data)
  // });
  // const body = await response.json();
  // if (!response.ok) {
  //   throw Error(response.statusText);
  // } else {
  //   dispatch(fetchNotesData(userId));
  //   dispatch(setCurrentNoteState(body));
  // }
  return (dispatch, getState) => {
    const state = getState();
    const note = getDefaultNote(userId);
    const notes = [...state.notes.notes, note];
    dispatch(setCurrentNoteState(note));
    dispatch(setNotes(notes));
  };
}
export function updateNote(noteObj) {
  // return async dispatch => {
  //   const data = noteObj;
  //   const response = await fetch("/notes/note/" + noteObj._id, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json;charset=UTF-8" },
  //     body: JSON.stringify(data)
  //   });
  //   const body = await response.json();
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   } else {
  //     dispatch(fetchNotesData(noteObj.userId));
  //   }
  return (dispatch, getState) => {
    const state = getState();
    const notes = [...state.notes.notes];
    const index = _.findIndex(notes, { _id: noteObj._id });
    notes.splice(index, 1, noteObj);
    dispatch(setNotes(notes));
  };
}
export function deleteNote(noteId) {
  // return async (dispatch, getState) => {
  //   const { user } = getState();
  //   const response = await fetch("/notes/note/" + noteId, {
  //     method: "DELETE"
  //   });
  //   if (!response.ok) {
  //     throw Error(response.statusText);
  //   }
  //   dispatch(fetchNotesData(user.user._id));
  // };
  return (dispatch, getState) => {
    const state = getState();
    const notes = [...state.notes.notes];
    const index = _.findIndex(notes, { _id: noteId });
    notes.splice(index, 1);
    dispatch(setNotes(notes));
  };
}
// export function setCurrentNoteId(noteId) {
//   return { type: types.SET_CURRENT_NOTE_ID, noteId };
// }
export function setCurrentNoteState(noteObj) {
  return { type: types.SET_CURRENT_NOTE_STATE, noteObj };
}
export function emailNote(noteObj) {
  return async dispatch => {
    const data = {
      ...noteObj,
      recipient: "",
      subject: ""
    };
    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=UTF-8" },
      body: JSON.stringify(data)
    });
    const body = await response.json();
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      console.log(body);
      //dispatch(fetchNotesData(noteObj.userId));
    }
  };
}
