import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const TextImage = ({ content, style }) => {
  return (
    <Card
      sx={{
        ...style.card,
      }}
    >
      <Box
        sx={{
          ...style.box,
        }}
      >
        <CardContent sx={{ ...style.cardContent }}>
          <Typography sx={{ ...style.cardTitle }}>
            {content.title && content.title}
          </Typography>
          <Typography>{content.description && content.description}</Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ ...style.cardMedia }}
        image="/public/SmallLogo.png"
        alt="Live from space album cover"
      />
    </Card>
  );
};

export default TextImage;
