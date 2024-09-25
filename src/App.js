import React, { useState, useEffect } from "react";
import { Container, Toolbar } from "@mui/material"; // Import Toolbar
import AudiobookList from "./components/AudiobookList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"; // Import the updated App.css file

function App() {
  const [audiobooks, setAudiobooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=audiobook&maxResults=31"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the API data to the console
        setAudiobooks(data.items || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <Header />
      <Toolbar /> {/* Toolbar added as a spacer to prevent header overlap */}
      <Container className="container">
        <AudiobookList audiobooks={audiobooks} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
