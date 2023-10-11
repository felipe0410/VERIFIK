"use client";
import { Box } from "@mui/material";
import Container from "./components/Container/Container";
// import { getCategories, getNote } from "./hooks/MySQL";
import { useEffect, useState } from "react";
// import CardNote from "./components/cardNotes/cardNotes";

export default function Home() {
  const [petition, setPetition] = useState(1);
  const [notes, setNotes] = useState<
    Array<{
      Categories_idCategories: number;
      idNOTE: number;
      msg: string;
      titleNote: string;
    }>
  >([]);
  const [categories, setCategories] = useState<
    Array<{
      categoryName: string;
      idCategories: number;
    }>
  >([
    {
      categoryName: "",
      idCategories: 1,
    },
  ]);

  // useEffect(() => {
  //   const getNotes = async () => {
  //     const note = await getNote();
  //     setNotes(note);
  //     const categoriess: any = await getCategories();
  //     setCategories(categoriess);
  //   };
  //   getNotes();
  // }, [petition]);

  return (
    <main>
      <Box>
        <Container>
          <Box width={"90%"} sx={{ display: "flex", flexWrap: "wrap" }}>
            {notes.map((note) => (
              <Box key={note.idNOTE}>{/* notes */}</Box>
            ))}
          </Box>
        </Container>
      </Box>
    </main>
  );
}
