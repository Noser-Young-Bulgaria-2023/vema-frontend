import { SxProps } from "@mui/material";

const addIcon: SxProps = {
  fontSize: "5rem",
  transition: "color 0.5s",
  zIndex: 10,
};

const paper: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "350px",
  height: "350px",
  "&:hover .backgroundGradient": {
    opacity: 1,
  },
  "&:hover .overlay": {
    visibility: "visible",
    opacity: 1,
  },
  "&:hover .productImage": {
    paddingBottom: "10px",
  },
  transition: "all 0.5s",
};

const backgroundGradient: SxProps = {
  display: "flex",
  flex: 1,
  position: "absolute",
  background: "linear-gradient(180deg, #66CE91 0%, #294072)",
  width: "350px",
  height: "350px",
  zIndex: 1,
  opacity: 0,
  transition: "opacity 0.5s",
};

export default {
  addIcon,
  paper,
  backgroundGradient,
};
