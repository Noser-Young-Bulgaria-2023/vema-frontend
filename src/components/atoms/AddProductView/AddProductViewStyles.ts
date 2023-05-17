import { SxProps } from "@mui/material";

const addIcon: SxProps = {
  fontSize: "5rem",
  transition: "color 0.5s",
  zIndex: 10,
};

const paperOnHover: SxProps = {
  "&:hover .addIcon": {
    color: "white",
  },
};

export default {
  addIcon,
  paperOnHover,
};
