import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
    media: {
        height: 250,  
    },
}));

export default function Post() {
    const classes = useStyles();
    return (
       <Card>
           <CardActionArea>
               <CardMedia
                   className={classes.media}
                   image="http://c.files.bbci.co.uk/CF3C/production/_111925035_penguino.jpg"
                   title="My Post"
                />
                <CardContent>
                    <Typography variant="h5">My First Post</Typography>
                    <Typography variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut facilisis odio ipsum, et porta lorem tristique a. Vivamus tortor diam, maximus vitae vestibulum in, pellentesque luctus diam. Donec placerat sem ac sodales dignissim. Etiam pellentesque sit amet eros non placerat. Sed at dictum justo, eu accumsan nisl. Pellentesque a nunc at lectus aliquet pharetra.</Typography>
                </CardContent>
            </CardActionArea>
       </Card>
    )
}