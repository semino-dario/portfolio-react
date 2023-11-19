import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Mail from "./imagenes/mail.svg"
import { useEffect } from 'react';


export default function PositionedPopper(imagen) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };


    useEffect(() => {
        const handleDocumentClick = (event) => {
            // Close the Popper if the click is outside the anchorEl
            if (anchorEl && !anchorEl.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleDocumentClick);

        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };
    }, [anchorEl]);


    return (
        <Box sx={{ width: 500 }}>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography sx={{ p: 2 }}> <a href="mailto:dariomartinsemino@gmail.com">dariomartinsemino@gmail.com</a></Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
            <div className="w-[30px] md:w-[50px] cursor-pointer">   <img src={Mail} onClick={handleClick('bottom')} /> </div>
        </Box>
    );
}
