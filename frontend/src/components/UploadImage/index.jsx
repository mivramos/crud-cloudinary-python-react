import { Button, Box, Typography, CircularProgress } from "@mui/material";
import { Upload } from "@mui/icons-material";


const UploadImage = ({
    file = null,
    sending = false,
    onSelectFile = () => {},
    onSendFile = () => {},
}) => {
    const handleSelectFile = (event) => {
        onSelectFile(event);
    };

    const handleSendFile = () => {
        onSendFile();
    };

    return (
        <>
            <Box display = "flex" justifyContent = "center" mt = {4}>
                <input
                    id = "upload-image"
                    type = "file"
                    accept = "image/*"
                    onChange = {handleSelectFile}
                    style={{ display: "none" }}
                />
                <label htmlFor = "upload-image">
                    <Button variant = "contained" component = "span">
                        Select Image
                    </Button>
                </label>
                <Button
                    disabled = {!file}
                    variant = "contained"
                    color = "success"
                    startIcon = {<Upload />}
                    onClick = {handleSendFile}
                    sx = {{ ml: 1 }}
                >
                    Submit {sending && <CircularProgress size = {20} sx = {{ ml: 1 }} />}
                </Button>
            </Box>
            {file && (
                <Typography component = "p" variant = "caption" textAlign = "center" mt = {2}>
                    Select File: {file.name}
                </Typography>
            )}
        </>
    )
}

export default UploadImage;