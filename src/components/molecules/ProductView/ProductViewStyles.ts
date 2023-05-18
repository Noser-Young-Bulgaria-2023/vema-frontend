import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

const paper: SxProps = {
  display: "flex",
  position: "unset",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  width: "350px",
  height: "350px",
  zIndex: 5,
};

const paperOnHover: SxProps = {
  transition: "all 0.5s",
  "&:hover": {
    transform: "translateY(-10%) scale(1.2)",
    position: "relative",
  },
  "&:hover .backgroundGradient": {
    opacity: 1,
  },
  "&:hover .overlay": {
    display: "block",
    opacity: 1,
  },
  "&:hover .productImage": {
    paddingBottom: "10px",
  },
};

const content: SxProps = {
  zIndex: 5,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100%",
  justifyContent: "center",
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
  transition: "all 0.5s",
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

const editProductBox: SxProps = {
  position: "absolute",
  top: 0,
  right: 0,
  display: "flex",
  flexDirection: "row",
  zIndex: 10,
};

const editButton: SxProps = {
  borderRadius: "0px",
};

const deleteButton: SxProps = {
  borderRadius: "0px",
};

const overlay: SxProps = {
  display: "none",
  transition: "all 0.5s",
  opacity: 0,
};

export default {
  paper,
  paperOnHover,
  content,
  hoverText,
  hoverPrice,
  backgroundGradient,
  productImage,
  editProductBox,
  editButton,
  overlay,
  productImageContainer,
  deleteButton,
};
