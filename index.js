const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public')); // Assuming your static files are in a "public" directory

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
