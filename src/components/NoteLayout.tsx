import React from "react";
import { Note } from "../App";
import {
  Outlet,
  useOutletContext,
  useParams,
  Navigate,
} from "react-router-dom";

type NoteLayoutProps = {
  notes: Note[];
};

const NoteLayout = ({ notes }: NoteLayoutProps) => {
  const { id } = useParams();
  const note = notes.find((n) => n.id === id);

  if (note == null) return <Navigate to="/" />;

  return <Outlet context={note}></Outlet>;
};

export default NoteLayout;

export function useNote() {
  return useOutletContext<Note>();
}
