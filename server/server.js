const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Middleware (if needed) to parse JSON
app.use(express.json());

// Example API endpoint
app.get('/api', (req, res) => {
  res.json({ message: "Hello from the Express backend!" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});