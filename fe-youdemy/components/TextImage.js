import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const TextImage = ({ content, styles }) => {
  return (
    <Card
      elevation={content.elevation}
      sx={{
        ...styles.card,
      }}
    >
      <CardMedia
        component="img"
        sx={{ ...styles.media }}
        src={content.imageUrl && content.imageUrl}
        alt={content.imageAltText && content.imageAltText}
      />
      <Box
        sx={{
          ...styles.box,
        }}
      >
        <CardContent sx={{ ...styles.cardContent }}>
          <Typography sx={{ ...styles.cardTitle }}>
            {content.title && content.title}
            {content.name && content.name}
          </Typography>
          <Typography>{content.description && content.description}</Typography>
          <Typography sx={{ ...styles.subTitle }}>
            {content.subTitle && content.subTitle}
            {content.headline && content.headline}
          </Typography>
          <Typography sx={{ ...styles.skills }}>
            {content.skills && content.skills}
          </Typography>
          <Typography sx={{ ...styles.subDescription }}>
            {content.subDescription && content.subDescription}
            {content.profileDescription && content.profileDescription}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default TextImage;
