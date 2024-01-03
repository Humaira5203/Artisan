const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/drawingAppDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up your routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
