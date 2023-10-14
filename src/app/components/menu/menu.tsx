"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EditIcon from "@mui/icons-material/Edit";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { useRouter } from "next/navigation";
const sections = [
  {
    section: "Resultados",
    icon: <CoPresentIcon fontSize="large" style={{ color: "#fff" }} />,
    id: "/scans",
  },
  {
    section: "Escanear",
    icon: <DocumentScannerIcon fontSize="large" style={{ color: "#fff" }} />,
    id: "/",
  },
];
export default function OpenIconSpeedDial() {
  const router = useRouter();

  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {sections.map((action) => (
          <SpeedDialAction
            sx={{ background: "#000", padding: "20px" }}
            key={action.id}
            icon={action.icon}
            tooltipTitle={action.section}
            onClick={() => router.push(action.id)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
