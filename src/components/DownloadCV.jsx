import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { Fab } from '@mui/material';
import { saveAs } from 'file-saver';
import pdfFile from './files/CV-Dario-Semino.pdf';


export default function DownloadCV() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const downloadPDF = () => {
        saveAs(pdfFile, 'Dario-Semino.pdf');
        handleClose()

    }

    return (
        <React.Fragment>
            <Fab variant='extended' onClick={handleClickOpen}>Download CV</Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"You are about to download a PDF file."}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={downloadPDF} autoFocus>
                        Download
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}