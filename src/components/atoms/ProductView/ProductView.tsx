import {Box, Grid, IconButton, Paper, Typography} from "@mui/material";
import {Product} from "../../../types/models/Product.model";
import ProductViewStyles from "./ProductViewStyles";
import AddIcon from "@mui/icons-material/Add";
import {useState} from "react";

type ProductViewProps = {
    product?: Product;
    openNewProduct: (product: Product | undefined) => void;
};

const ProductView = ({product, openNewProduct}: ProductViewProps) => {
    const [showHoverText, setShowHoverText] = useState(false);

    return (
        <Grid item>
            <Paper
                sx={{
                    ...ProductViewStyles.paper,
                }}
                onMouseEnter={() => setShowHoverText(true)}
                onMouseLeave={() => setShowHoverText(false)}
                variant="outlined"
                square
            >
                <Box
                    className="backgroundGradient"
                    sx={ProductViewStyles.backgroundGradient}
                ></Box>
                {product && (
                    <Box sx={ProductViewStyles.content}>
                        <img
                            src={`data:image/png;base64,${product.image.data}`}
                            alt={product.name}
                            style={ProductViewStyles.image}
                        />
                        {showHoverText && (
                            <Typography sx={ProductViewStyles.hoverText}>
                                {product.name}
                            </Typography>
                        )}
                    </Box>
                )}
                {!product && (
                    <IconButton onClick={() => openNewProduct(undefined)}>
                        <AddIcon
                            sx={{
                                ...ProductViewStyles.addIcon,
                                color: showHoverText ? "white" : undefined,
                            }}
                        />
                    </IconButton>
                )}
            </Paper>
        </Grid>
    );
};

export default ProductView;
