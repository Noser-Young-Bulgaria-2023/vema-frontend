import React from "react";

type BuyProductDialogProps = {
  open: boolean;
  closeDialog: () => void;
};

const BuyProductDialog = ({ open, closeDialog }: BuyProductDialogProps) => {
  return <div>BuyProductDialog</div>;
};

export default BuyProductDialog;
