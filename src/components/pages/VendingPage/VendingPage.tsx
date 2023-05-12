import {useLayoutEffect, useState, useEffect} from "react";
import {Product} from "../../../types/models/Product.model";
import ProductSelectionBox from "../../organisms/ProductSelectionBox/ProductSelectionBox";
import {
    Box,
    Typography,
    Dialog,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    IconButton
} from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VendingPageStyles from "./VendingPageStyles";
import ProductService from "../../../services/ProductService";

const VendingPage = () => {
    const [productList, setProductList] = useState<Product[]>([]);
    const [openNewProduct, setOpenNewProduct] = useState(false);
    const [selectedImage, setSelectedImage] = useState();
    const [imagePreview, setImagePreview] = useState<string>();

    const [productName, setProductName] = useState<string>();
    const [productPrice, setProductPrice] = useState<number>();
    const [productAmount, setProductAmount] = useState<number>();

    useLayoutEffect(() => {
        ProductService.getAllProducts().then((res) => {
            setProductList(res.data);
        });
    }, []);

    useEffect(() => {
        if (!selectedImage) {
            setImagePreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedImage);
        setImagePreview(objectUrl);

        return () => URL.revokeObjectURL(objectUrl);
    }, [selectedImage])

    const handleNewProduct = (product: Product | undefined) => {
        setOpenNewProduct(true);
    };

    const handleImageChange = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedImage(undefined);
            return
        }
        setSelectedImage(e.target.files[0])
    }

    return (
        <Box sx={VendingPageStyles.page}>
            <Typography variant="h1">VEMA</Typography>
            <ProductSelectionBox
                productList={productList}
                openNewProduct={handleNewProduct}
            />
            <Dialog
                open={openNewProduct}
                onClose={() => {
                    setOpenNewProduct(false);
                    setSelectedImage(undefined);
                }}
                sx={{
                    ...VendingPageStyles.productDialog
                }}>
                <DialogContent>
                    <Box textAlign="center">
                        {!selectedImage && <>
                            <input accept="image/*" hidden id="productImage" type="file" onChange={handleImageChange}/>
                            <label htmlFor="productImage">
                                <IconButton component="span">
                                    <AddPhotoAlternateIcon
                                        sx={{
                                            ...VendingPageStyles.productImage,
                                            color: "#DCDDE1",
                                        }}
                                    />
                                </IconButton>
                            </label>
                        </>}
                        {selectedImage &&
                            <Box sx={{...VendingPageStyles.productImagePreviewSection}}>
                                <img style={{maxHeight: "150px", margin: "1rem"}} alt="Product image preview"
                                     src={imagePreview}/>
                                <Button onClick={() => setSelectedImage(undefined)}>Clear</Button>
                            </Box>
                        }
                    </Box>

                    <form onSubmit={(event) => event.preventDefault()}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="productName"
                            label="Product Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(event) => {
                                setProductName(event.target.value);
                            }}
                        />
                        <Box style={{display: "flex", gap: "10px"}}>
                            <TextField
                                margin="dense"
                                id="productPrice"
                                label="Product Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(event) => {
                                    setProductPrice(Number(event.target.value));
                                }}
                            />
                            <TextField
                                margin="dense"
                                id="productAmount"
                                label="Product Amount"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={(event) => {
                                    setProductAmount(Number(event.target.value));
                                }}
                            />
                        </Box>
                        <DialogActions>
                            <Button onClick={() => {
                                setOpenNewProduct(false);
                                setSelectedImage(undefined);
                            }}>Cancel</Button>
                            <Button type="submit" onClick={() => {
                                const product: Product = {
                                    id: undefined,
                                    name: productName,
                                    price: productPrice,
                                    amount: productAmount,
                                    image: undefined
                                }

                                ProductService.saveProduct(product, selectedImage).then(() => {
                                    setOpenNewProduct(false)
                                })
                            }}>Save</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </Box>
    )
        ;
};

export default VendingPage;
