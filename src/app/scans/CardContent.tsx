import React from "react";
import { CardNoteProps, styleSpan } from "./interface";
import {
  Box,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const CardContentt: React.FC<CardNoteProps> = ({
  first_name,
  lastName,
  documentNumber,
  img,
  categorie,
  title,
  setPetition,
  open,
}) => (
  <React.Fragment>
    <CardContent>
      <Box>
        <Box
          display={"flex"}
          sx={{
            alignContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              background: "#08315C",
              padding: "10px",
              marginLeft: "-28px",
              marginTop: "-16px",
              borderRadius: "40px",
              paddingLeft: "36px",
              paddingRight: "15px",
              justifyContent: "space-between",
              width: "150px",
              textAlignLast: "center",
            }}
          >
            <Typography
              sx={{
                color: "#FFF",
                fontFamily: "Nunito",
                fontSize: { xs: "12px", sm: "20px" },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                textTransform: "none",
              }}
            >
              {categorie}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#FF6B00",
                fontFamily: "Nunito",
                fontSize: { xs: "12px", sm: "20px" },
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
                textTransform: "none",
              }}
            >
              {title.slice(0, 4)}...
            </Typography>
          </Box>
        </Box>
        {/* -------------------- */}
        <Box marginY={"20px"}>
          <Typography
            sx={{
              color: "#071D34",
              fontFamily: "Nunito",
              fontSize: { xs: "12px", sm: "20px" },
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "normal",
            }}
          >
            <span
              style={{
                color: "#FF6B00",
                fontFamily: "Nunito",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 800,
                lineHeight: "normal",
                textTransform: "none",
              }}
            >
              FIRST NAME:
            </span>
            {first_name}
          </Typography>
        </Box>
        <Box sx={{ display: open ? "block" : "none" }}>
          {/* -------------------- */}
          <Box marginY={"20px"}>
            <Typography
              sx={{
                color: "#071D34",
                fontFamily: "Nunito",
                fontSize: { xs: "12px", sm: "20px" },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              <span
                style={{
                  color: "#FF6B00",
                  fontFamily: "Nunito",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "normal",
                  textTransform: "none",
                }}
              >
                LAST NAME:
              </span>
              {lastName}
            </Typography>
          </Box>
          {/* -------------------- */}
          <Box marginY={"20px"}>
            <Typography
              sx={{
                color: "#071D34",
                fontFamily: "Nunito",
                fontSize: { xs: "12px", sm: "20px" },
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              <span
                style={{
                  color: "#FF6B00",
                  fontFamily: "Nunito",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 800,
                  lineHeight: "normal",
                  textTransform: "none",
                }}
              >
                NUMBER
              </span>
              {documentNumber}
            </Typography>
          </Box>
          <Box>
            <Box width={"90%"} component={"img"} src={img} />
          </Box>
        </Box>
      </Box>

      <CardActions sx={{ placeContent: "center" }}>
        <Button
          sx={{ display: open ? "none" : "block", borderRadius: "40px" }}
          onClick={() => setPetition(true)}
          variant="contained"
        >
          SHOW DETAILS
        </Button>
        <Button
          sx={{ display: !open ? "none" : "block", borderRadius: "40px" }}
          onClick={() => setPetition(false)}
          variant="contained"
        >
          HIDE DETAILS
        </Button>
      </CardActions>
    </CardContent>
  </React.Fragment>
);
export default CardContentt;
