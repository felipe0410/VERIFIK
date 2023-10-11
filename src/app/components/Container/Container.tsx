import { Box } from "@mui/material";

const Container = ({ children }: { children: any }) => {
  return (
    <Box
      id="container"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        height: "93vh",
        alignItems: "center",
      }}
    >
      <Box
        width={"95%"}
        height={"95%"}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default Container;
