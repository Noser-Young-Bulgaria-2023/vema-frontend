import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

const paper: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "350px",
  height: "350px",
  "&:hover .backgroundGradient": {
    opacity: 1,
  },
};

const content: SxProps = {
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const hoverText: SxProps = {
  textAlign: "center",
  padding: 1,
  fontSize: "2.5rem",
  color: "white",
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

const addIcon: SxProps = {
  fontSize: "5rem",
  transition: "color 0.5s",
  zIndex: 1,
};

const image: CSSProperties = {
  height: "200px",
  width: "200px",
  objectFit: "contain",
};

export default {
  paper,
  content,
  hoverText,
  backgroundGradient,
  addIcon,
  image,
};
