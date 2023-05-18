import { SxProps } from "@mui/material";

const dialog: SxProps = {
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const product: SxProps = {
  pointerEvents: "none",
};

const depositDisplay: SxProps = {
  position: "unset",
};

export default { dialog, depositDisplay, product };
