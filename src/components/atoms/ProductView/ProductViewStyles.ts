import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

const paper: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "350px",
  height: "350px",
  "&:hover": {
    transform: "translateY(-10%) scale(1.2)",
    zIndex: 5,
  },
  "&:hover .backgroundGradient": {
    opacity: 1,
  },
  "&:hover .hoverText": {
    display: "block",
  },
  "&:hover .addIcon": {
    color: "white",
  },
};

const content: SxProps = {
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const hoverText: SxProps = {
  display: "none",
  textAlign: "center",
  paddingTop: 1,
  fontSize: "1.5rem",
  color: "white",
};

const hoverPrice: SxProps = {
  padding: 0,
  paddingBottom: 1,
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
  zIndex: 10,
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
  hoverPrice,
  backgroundGradient,
  addIcon,
  image,
};
