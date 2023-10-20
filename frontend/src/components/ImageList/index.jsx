import { Button, Container, Grid } from "@mui/material";

const ImageList = ({ images = [], onDeleteImage }) => {
    return (
        <Container maxWidth = "lg" sx = {{ mt: 4 }}>
            <Grid container spacing = {2}>
                {images.map((image) => (
                    <Grid key = {image.public_id} item xs = {12} sm = {6} md = {4}>
                        <img
                            src = {image.secure_url}
                            atl = {image.public_id}
                            style = {{ width: "100%" }}
                        />
                        <Button
                            variant = "contained"
                            color = "error"
                            onClick = {() => onDeleteImage(image.public_id)}
                        >
                            Eliminar
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ImageList;