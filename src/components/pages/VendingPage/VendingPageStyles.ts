import { SxProps } from "@mui/material";
import { CSSProperties } from "react";

const page: SxProps = {
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const pageContent: SxProps = {
  maxWidth: "1920px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const logo: CSSProperties = {};

export default { page, pageContent, logo };
