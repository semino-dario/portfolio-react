import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function OutlinedCard({ escuela, curso, año, horas, imagen, verCredencial }) {

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {escuela}               </Typography>
                <Typography variant="h5" component="div">
                    {curso}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {año}          </Typography>
                <Typography variant="body2">
                    {horas}
                    <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={verCredencial} size="big">Certificate</Button>
                <img src={imagen} className='w-[35px] mb-[50px] mr-[35px]' alt="" />
            </CardActions>
        </React.Fragment>
    );

    return (
        <Box sx={{ width: 320, height: 320 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}