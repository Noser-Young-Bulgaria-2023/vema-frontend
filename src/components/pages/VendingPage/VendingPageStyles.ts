import {SxProps} from "@mui/material";

const page: SxProps = {
    maxWidth: "1920px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
};

const productImage: SxProps = {
    fontSize: "5rem",
}

const productImagePreview: SxProps = {
    maxHeight: "150px",
}

const productImagePreviewSection: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const productDialog: SxProps = {}

export default {page, productImage, productImagePreview, productDialog, productImagePreviewSection};
