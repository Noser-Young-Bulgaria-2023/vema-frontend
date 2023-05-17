import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

const paper: SxProps = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
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
  "&:hover .overlay": {
    visibility: "visible",
    opacity: 1,
  },
  "&:hover .productImage": {
    paddingBottom: "10px",
  },
  transition: "all 0.5s",
};

const content: SxProps = {
  zIndex: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent: "space-between",
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

const productImage: CSSProperties = {
  height: "200px",
  width: "200px",
  objectFit: "contain",
};

const productImageContainer: SxProps = {
  paddingBottom: "0px",
  transition: "all 0.2s",
};

const editButton: SxProps = {
  borderRadius: "0px",
};

const deleteButton: SxProps = {
  borderRadius: "0px",
};

const overlay: SxProps = {
  visibility: "hidden",
  transition: "all 0.5s",
  opacity: 0,
};

export default {
  paper,
  content,
  hoverText,
  hoverPrice,
  backgroundGradient,
  productImage,
  editButton,
  overlay,
  productImageContainer,
  deleteButton,
};
