"use client";
import { Box, Typography, Button } from "@mui/material";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import FlipIcon from "@mui/icons-material/Flip";
import ScannerIcon from "@mui/icons-material/Scanner";
import { useEffect, useState } from "react";
import ModalComponent from "./scaner/scan";

const CreateNote = () => {
  const [openZero, setOpenZero] = useState(false);
  const [openPrompt, setOpenPrompt] = useState(false);
  const [openStudio, setOpenStudio] = useState(false);
  const [petition, setPetition] = useState(0);

  useEffect(() => {
    setOpenZero(false);
    setOpenPrompt(false);
    setOpenStudio(false);
  }, [petition]);

  const close = (typeScan: string) => {
    switch (typeScan) {
      case "SCAN-ZERO":
        setOpenZero(false);
        break;

      default:
        break;
    }
  };
  const typeScan = [
    {
      name: "SCAN-ZERO",
      icon: <SensorOccupiedIcon sx={{ fontSize: "4vw", color: "#1aabff" }} />,
      pacth: "/scan-zero",
      description: [
        "Offers OCR for extracting information from scanned documents.",
        "Provides extracted data in OCR text format along with corresponding labels.",
        "Includes validation and verification of the accuracy of the extracted data.",
      ],
      endPoint: "https://api.verifik.co/v2/ocr/scan-zero",
      open: openZero,
      setOpen: setOpenZero,
      close: () => {
        setOpenZero(false);
      },
    },
    {
      name: "SCAN-PROMPT",
      icon: <FlipIcon sx={{ fontSize: "4vw", color: "#1aabff" }} />,
      pacth: "/scan-prompt",
      description: [
        "Enables scanning, extraction, and verification of data in documents using OCR and AI technology.",
        "Allows you to send document images and receive extracted data.",
        "Promises higher accuracy and efficiency in document processing due to integration with AI models.",
      ],
      endPoint: "https://api.verifik.co/v2/ocr/scan-prompt",
      open: openPrompt,
      setOpen: setOpenPrompt,
      close: () => setOpenPrompt(false),
    },
    {
      name: "SCAN-STUDIO",
      icon: <ScannerIcon sx={{ fontSize: "4vw", color: "#1aabff" }} />,
      pacth: "/scan-studio",
      description: [
        "Uses pretrained models for performing OCR on identity documents.",
        "Focuses on the fast and accurate extraction of data from identity documents such as passports and ID cards.",
        "Provides faster and more accurate responses due to the use of pretrained models.",
      ],
      endPoint: "https://api.verifik.co/v2/ocr/scan-studio",
      open: openStudio,
      setOpen: setOpenStudio,
      close: () => setOpenStudio(false),
    },
  ];

  return (
    <Box sx={{ color: "#fff", marginTop: "130px" }}>
      <Typography
        align="center"
        color="initial"
        sx={{
          color: "#FF6B00",
          fontFamily: "Nunito",
          fontSize: "50px",
          fontStyle: "normal",
          fontWeight: 800,
          lineHeight: "normal",
          marginBottom: "30px",
        }}
      >
        SCANER
      </Typography>
      <Box sx={{ width: "100%" }}>
        {
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {typeScan.map((button, index) => (
              <Button
                onClick={() => button.setOpen(true)}
                sx={{
                  width: "25%",
                  padding: "20px",
                  borderRadius: "40px",
                  background: "#08315C",
                  boxShadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                }}
                key={index}
              >
                {
                  <Box>
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontFamily: "Nunito",
                        fontSize: "24px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                      }}
                    >
                      {button.name}
                    </Typography>
                    <Box
                      sx={{
                        padding: "20px",
                      }}
                    >
                      {button.icon}
                    </Box>
                    <Box>
                      {
                        <ul style={{ color: "#FFF", textAlign: "left" }}>
                          {button.description.map((element, i) => (
                            <li key={i}>{element}</li>
                          ))}
                        </ul>
                      }
                    </Box>
                    <ModalComponent
                      setOpen={setPetition}
                      title={button.name}
                      pacth={button.pacth}
                      open={button.open}
                    />
                  </Box>
                }
              </Button>
            ))}
          </Box>
        }
      </Box>
    </Box>
  );
};

export default CreateNote;
