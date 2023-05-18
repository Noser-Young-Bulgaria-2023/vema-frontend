import { Box, Grid, IconButton, Paper } from "@mui/material";
import AddProductViewStyles from "./AddProductViewStyles";
import AddIcon from "@mui/icons-material/Add";
import ProductViewStyles from "../ProductView/ProductViewStyles";

interface AddProductViewProps {
  openAddProductViewDialog: (isOpen: boolean) => void;
}

export default function AddProductView(props: AddProductViewProps) {
  return (
    <Grid item>
      <Paper
        sx={{
          ...ProductViewStyles.paper,
          ...ProductViewStyles.paperOnHover,
          ...AddProductViewStyles.paperOnHover,
        }}
        variant="outlined"
        square
      >
        <Box
          className="backgroundGradient"
          sx={ProductViewStyles.backgroundGradient}
        ></Box>
        <Box sx={ProductViewStyles.content}>
          <IconButton onClick={() => props.openAddProductViewDialog(true)}>
            <AddIcon
              className="addIcon"
              sx={{
                ...AddProductViewStyles.addIcon,
              }}
            />
          </IconButton>
        </Box>
      </Paper>
    </Grid>
  );
}
