import { SxProps } from "@mui/material";

const paper: SxProps = {
  position: "fixed",
  top: 10,
  right: 10,
  zIndex: 200,
  padding: 2,
  background: "linear-gradient(180deg, #66CE91 0%, #294072)",
};

const text: SxProps = {
  fontSize: "1.5rem",
};

const button: SxProps = {
  color: "white",
};

export default { paper, text, button };
