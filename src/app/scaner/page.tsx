"use client";
import { Box, Typography, Button, Modal } from "@mui/material";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import FlipIcon from "@mui/icons-material/Flip";
import ScannerIcon from "@mui/icons-material/Scanner";
import { useState } from "react";
import { UploadButton, UploadDropzone } from "@bytescale/upload-widget-react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const CreateNote = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const typeScan = [
    {
      name: "scan-zero",
      icon: <SensorOccupiedIcon sx={{ fontSize: "4vw", color: "#1aabff" }} />,
      pacth: "/scan-zero",
      description: [
        "Offers OCR for extracting information from scanned documents.",
        "Provides extracted data in OCR text format along with corresponding labels.",
        "Includes validation and verification of the accuracy of the extracted data.",
      ],
    },
    {
      name: "scan-prompt",
      icon: <FlipIcon sx={{ fontSize: "4vw", color: "#1aabff" }} />,
      pacth: "/scan-prompt",
      description: [
        "Enables scanning, extraction, and verification of data in documents using OCR and AI technology.",
        "Allows you to send document images and receive extracted data.",
        "Promises higher accuracy and efficiency in document processing due to integration with AI models.",
      ],
    },
    {
      name: "scan-studio",
      icon: <ScannerIcon sx={{ fontSize: "4vw", color: "#1aabff" }} />,
      pacth: "/scan-studio",
      description: [
        "Uses pretrained models for performing OCR on identity documents.",
        "Focuses on the fast and accurate extraction of data from identity documents such as passports and ID cards.",
        "Provides faster and more accurate responses due to the use of pretrained models.",
      ],
    },
  ];

  const options = {
    apiKey: "free", // Get API keys from: www.bytescale.com
    maxFileCount: 3,
  };

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
                onClick={handleOpen}
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
                  </Box>
                }
              </Button>
            ))}
          </Box>
        }
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              sx={{
                color: "#FF6B00",
                fontFamily: "Nunito",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
              }}
            >
              DOCUMENT UPLOAD
            </Typography>
            <form
              action="tu_script_de_procesamiento"
              method="post"
              encType="multipart/form-data"
            >
              <input type="file" name="imagen" accept="image/*" /> El atributo
              "accept" permite solo archivos de imagen
              <input type="submit" value="Subir Imagen" />
            </form>

            <UploadDropzone
              options={options}
              onUpdate={({ uploadedFiles }) =>
                console.log(uploadedFiles.map((x) => x.fileUrl).join("\n"))
              }
              onComplete={(files) =>
                alert(files.map((x) => x.fileUrl).join("\n"))
              }
            />
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default CreateNote;
