import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { saveDataToFirestore, uploadImage } from "../firebase";
import Loading from "./Loading";
import { useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  styled,
  Modal,
} from "@mui/material";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "40px",
  boxShadow:
    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const ModalComponent = ({
  setOpen,
  open,
  title,
  pacth,
}: {
  setOpen: any;
  title: string;
  pacth: string;
  open: boolean;
}) => {
  const [imageBase64, setImageBase64] = useState("");
  const [loading, setLoading] = useState(false);
  const [scan, setScan] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const [key, setKey] = useState(0);
  const [data, setData] = useState({
    img: "",
    last_name: "****************************",
    first_name: "***************************",
    documentType: "CC",
    validationMethod: "",
    client: "",
    documentNumber: "****************************",
  });

  const handleClose = () => {
    setOpen((e: number) => e + 1);
  };
  const handleFileInputChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64String: any = event?.target?.result;
        if (base64String) setImageBase64(base64String);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleScanZeroRequest = async () => {
    try {
      const requestData = {
        image: `${imageBase64}`,
        country: "CO",
      };
      const apiUrl = `https://api.verifik.co/v2/ocr${pacth}`;
      const authorizationToken = process.env.NEXT_PUBLIC_KEY_API_VERIFIK ?? "";
      const headers = {
        Authorization: authorizationToken,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      const response = await axios.post(apiUrl, requestData, { headers });
      dataExtraction(title, response);
      enqueueSnackbar("scanner completed successfully", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      setTimeout(() => {
        setScan(false);
      }, 2000);
    } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      enqueueSnackbar("Img invalid", {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      setTimeout(() => {
        setScan(false);
      }, 2000);
    }
  };

  const dataExtraction = async (typeOCR: String, response: any) => {
    const img: any = await uploadImage(fileRef);
    switch (typeOCR) {
      case "SCAN-ZERO":
        const extractionZERO = {
          img: img,
          last_name: response.data.data.OCRExtraction.last_name.ocr_text,
          first_name: response.data.data.OCRExtraction.first_name.ocr_text,
          documentType: response.data.data.documentType,
          validationMethod: response.data.data.validationMethod,
          client: response.data.data.client,
          documentNumber: response.data.data.documentNumber,
        };
        setData(extractionZERO);
        saveDataToFirestore(extractionZERO);
        break;
      case "SCAN-PROMPT":
        const extractionPROMPT = {
          img: img,
          last_name: response.data.data.OCRExtraction.lastName,
          first_name: response.data.data.OCRExtraction.firstName,
          documentType: response.data.data.documentType,
          validationMethod: response.data.data.validationMethod,
          client: response.data.data.client,
          documentNumber: response.data.data.OCRExtraction.documentNumber,
        };
        setData(extractionPROMPT);
        saveDataToFirestore(extractionPROMPT);
        break;
      case "SCAN-STUDIO":
        const extractionSTUDIO = {
          img: img,
          last_name: response.data.data.OCRExtraction.lastName,
          first_name: response.data.data.OCRExtraction.firstName,
          documentType: response.data.data.documentType,
          validationMethod: response.data.data.validationMethod,
          client: response.data.data.client,
          documentNumber: response.data.data.documentNumber,
        };
        setData(extractionSTUDIO);
        saveDataToFirestore(extractionSTUDIO);
        break;
      default:
        break;
    }
  };

  return (
    <Box>
      <SnackbarProvider />
      <Modal
        key={title}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={handleClose}
              sx={{
                border: "solid red 2px",
                borderRadius: "100%",
                minWidth: "auto",
                display: "flex",
                justifyContent: "flex-end",
              }}
              startIcon={
                <CloseIcon
                  style={{ margin: "0", marginRight: "-10px" }}
                  fontSize="large"
                  sx={{ color: "red" }}
                />
              }
            ></Button>
          </Box>
          <Typography
            align={"center"}
            sx={{
              color: "#FF6B00",
              fontFamily: "Nunito",
              fontSize: "25px",
              fontStyle: "normal",
              fontWeight: 800,
              lineHeight: "normal",
            }}
          >
            {`DOCUMENT UPLOAD `}
            <br />
            <span style={{ color: "#08315C" }} color={"#071D34"}>
              {title}
            </span>
          </Typography>
          <Box
            sx={{
              padding: "20%",
              textAlign: "center",
              border: "#00000040 dashed",
              display: imageBase64 && "none",
            }}
          >
            <CircularProgress
              sx={{ display: !loading ? "none" : "block", margin: "0 auto" }}
              size={100}
            />
            <Box display={loading ? "none" : "block"}>
              <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload IMG
                <VisuallyHiddenInput
                  key={key}
                  accept="image/*"
                  ref={fileRef}
                  onChange={(e) => {
                    const scan = () => {
                      setLoading(true);
                      handleFileInputChange(e);
                    };
                    scan();
                  }}
                  type="file"
                />
              </Button>
            </Box>
          </Box>
          {imageBase64 && !scan && (
            <Box>
              <img style={{ width: "100%" }} src={imageBase64} alt="Preview" />
            </Box>
          )}
          {scan && (
            <Box>
              <Loading />
            </Box>
          )}
          {
            <Box>
              <Typography
                align={"center"}
                sx={{
                  color: "#FF6B00",
                  fontFamily: "Nunito",
                  fontSize: "25px",
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "normal",
                }}
              >
                RESULT
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  DOCUMENT NUMBER
                </Typography>
                <Typography>CC: {data.documentNumber} </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  FIRST NAME
                </Typography>
                <Typography>{data.first_name}</Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontWeight: 700,
                  }}
                >
                  LAST NAME
                </Typography>
                <Typography>{data.last_name}</Typography>
              </Box>
            </Box>
          }
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "20px",
              }}
            >
              <Button
                sx={{
                  borderRadius: "40px",
                  background: "#FF6B00",
                  boxShadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  color: "#FFFFFF",
                }}
                onClick={() => {
                  setKey((e) => e + 1);
                  setImageBase64("");
                  setLoading(false);
                  setData({
                    img: "",
                    last_name: "****************************",
                    first_name: "***************************",
                    documentType: "CC",
                    validationMethod: "",
                    client: "",
                    documentNumber: "****************************",
                  });
                }}
              >
                CANCEL
              </Button>
              <Button
                disabled={!imageBase64 && true}
                sx={{
                  borderRadius: "40px",
                  background: !imageBase64 ? "#8080806e" : "#FF6B00",
                  boxShadow:
                    "0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                  color: "#FFFFFF",
                }}
                onClick={async () => {
                  setScan(true);
                  handleScanZeroRequest();
                }}
              >
                SCAN
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
