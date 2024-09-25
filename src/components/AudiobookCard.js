import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AudiobookDetails from "./AudiobookDetails";
import "./AudiobookCard.css";

const AudiobookCard = ({ audiobook }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Ensure audiobook is defined
  if (!audiobook) return null; // Return null if audiobook is undefined

  return (
    <motion.div whileHover={{ scale: 1.2 }}>
      <Card onClick={() => setShowDetails(true)}>
        <CardMedia
          component="img"
          height="206"
          width="128"
          image={audiobook.imageLinks?.smallThumbnail || "placeholder.jpg"} // Use thumbnail from imageLinks
          alt={audiobook.title}
        />
        <CardContent>
          <Typography variant="h6">{audiobook.title}</Typography>
          <Typography variant="subtitle2">
            {audiobook.authors?.join(", ") || "Unknown Author"}{" "}
            {/* Fallback for authors */}
          </Typography>
        </CardContent>
      </Card>

      {showDetails && (
        <AudiobookDetails
          audiobook={audiobook}
          onClose={() => setShowDetails(false)}
        />
      )}
    </motion.div>
  );
};

export default AudiobookCard;
