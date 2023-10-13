import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContentt from "./CardContent";
import { CardNoteProps } from "./interface";
import { useState } from "react";

const CardScan: React.FC<CardNoteProps> = ({
  categorie,
  title,
  first_name,
  lastName,
  documentNumber,
  img,
  id,
  Categories_idCategories,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ minWidth: 300, margin: "20px" }}>
      <Card
        sx={{
          border: "none",
          borderRadius: "40px",
          background: "#FFF",
          boxShadow:
            "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          width: "350px",
        }}
        variant="outlined"
      >
        <CardContentt
          first_name={first_name}
          lastName={lastName}
          documentNumber={documentNumber}
          img={img}
          categorie={categorie}
          title={title}
          id={id}
          setPetition={setOpen}
          Categories_idCategories={Categories_idCategories}
          open={open}
        />
      </Card>
    </Box>
  );
};

export default CardScan;
