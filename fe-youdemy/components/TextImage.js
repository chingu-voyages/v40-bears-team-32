import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const TextImage = ({ content }) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", justifyContent: "center", maxWidth: "700px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          width: "350px",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {content.title && content.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {content.description && content.description}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 350 }}
        image="/public/SmallLogo.png"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default TextImage;
