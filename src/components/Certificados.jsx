import * as React from 'react';
import { Button, Dialog, DialogActions } from "@mui/material";
import { useState } from "react";

export default function Certificados({ imagenes }) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (

        <div >
            <p className='cursor-pointer text-titulo hover:text-azulClaro' onClick={handleClickOpen}>SEE CERTIFICATE</p>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div>
                    <img src={imagenes} className='cover ' alt="" />
                </div>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}