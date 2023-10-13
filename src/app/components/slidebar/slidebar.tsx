"use client";

import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import Link from "next/link";

function Sidebar() {
  const pathname = usePathname();
  const sections = [
    {
      section: "Escanear",
      icon: <DocumentScannerIcon fontSize="large" style={{ color: "#fff" }} />,
      id: "/",
    },
    {
      section: "Resultados",
      icon: <CoPresentIcon fontSize="large" style={{ color: "#fff" }} />,
      id: "/scans",
    },
  ];
  return (
    <Drawer
      id="Drawer"
      variant="permanent"
      anchor="left"
      PaperProps={{
        style: {
          background: "transparent", // Establecer el fondo en blanco
        },
      }}
    >
      <List
        sx={{
          background: "#08315C",
          height: "100%",
          borderRadius: "0px 40px 40px 0px",
          overflow: "hidden",
        }}
      >
        <Box
          id="containerIMG"
          width={"10vw"}
          sx={{
            textAlignLast: "center",
            marginTop: "30px",
            marginBottom: "20px",
          }}
        >
          <Box width={"85%"} component={"img"} src="/logoVerifik.png" />
        </Box>
        <Box sx={{ textAlign: "-webkit-center", marginBottom: "20px" }}>
          <Box width={"90%"} height={"1px"} sx={{ background: "#87888C" }} />
        </Box>
        <Box id="containerSections">
          {sections.map((section: any, index: number) => (
            <Box sx={{ marginY: "40px" }} key={index}>
              <Link href={section.id}>
                <ListItem
                  button
                  sx={{
                    background:
                      pathname === section.id ? "#071D34" : "transparent",
                    borderRadius:
                      pathname === section.id ? "40px 0px 0px 40px" : "0",
                    marginLeft: "10px",
                    padding: "20px",
                  }}
                >
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <ListItemText
                    sx={{
                      color: "#FFFFFF",
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                    primary={section.section}
                  />
                </ListItem>
              </Link>
            </Box>
          ))}
        </Box>
      </List>
    </Drawer>
  );
}

export default Sidebar;
