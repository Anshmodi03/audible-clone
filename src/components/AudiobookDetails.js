// audiobookdetails.js
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import "./AudiobookDetails.css";

const AudiobookDetails = ({ audiobook, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Dialog
        open={true}
        onClose={onClose}
        PaperProps={{
          sx: {
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            width: "500px",
            maxWidth: "90%",
            margin: "20px auto",
          },
        }}
      >
        <DialogTitle>
          {audiobook.title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            style={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h6">
              Authors: {audiobook.authors?.join(", ")}
            </Typography>
            <Typography variant="body1">{audiobook.description}</Typography>
            <img
              src={audiobook.imageLinks?.thumbnail || "placeholder.jpg"}
              alt={audiobook.title}
              style={{ width: "100%" }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default AudiobookDetails;
