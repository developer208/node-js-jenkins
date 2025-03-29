const express = require('express');
const app = express();
const port = 3000;

// Simple GET API
app.get('/', (req, res) => {
  res.json({ message: 'Hello, this is your JSON data!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
