import { Box, Grid, IconButton, Paper } from "@mui/material";
import AddProductViewStyles from "./AddProductViewStyles";
import AddIcon from "@mui/icons-material/Add";

interface AddProductViewProps {
  openAddProductViewDialog: (isOpen: boolean) => void;
}

export default function AddProductView(props: AddProductViewProps) {
  return (
    <Grid item>
      <Paper
        sx={{
          ...AddProductViewStyles.paper,
        }}
        variant="outlined"
        square
      >
        <Box
          className="backgroundGradient"
          sx={AddProductViewStyles.backgroundGradient}
        ></Box>
        <Box
          sx={{
            display: "grid",
            height: "100%",
            width: "100%",
            placeItems: "center",
          }}
        >
          <IconButton onClick={() => props.openAddProductViewDialog(true)}>
            <AddIcon
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
