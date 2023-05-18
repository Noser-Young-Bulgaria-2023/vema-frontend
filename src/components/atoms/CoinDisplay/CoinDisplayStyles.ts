import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

const coinImage: CSSProperties = {
  width: "100px",
  height: "100px",
  objectFit: "contain",
};

const gridItem: SxProps = {
  display: "flex",
  flexDirection: "column",
};

const coinNameText: SxProps = {
  textAlign: "center",
};

export default { coinImage, gridItem, coinNameText };
