import React from "react";
import AudiobookCard from "./AudiobookCard";
import { Grid } from "@mui/material";
import "./AudiobookList.css";

const AudiobookList = ({ audiobooks = [] }) => {
  if (audiobooks.length === 0) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <Grid container spacing={2}>
      {audiobooks.map((audiobook) => (
        <Grid item key={audiobook.id} xs={12} sm={6} md={4}>
          {/* Ensure we pass volumeInfo and check it exists */}
          {audiobook.volumeInfo && (
            <AudiobookCard audiobook={audiobook.volumeInfo} />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default AudiobookList;
