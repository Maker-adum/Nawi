const express = require('express');
const path = require('path');

const app = express();
const clientEmails = [];
// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(express.json());

const PORT = process.env.PORT || 4000;


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.post('/saveemails', (req, res) => {
  const newEmail = req.body.email;
  clientEmails.push(newEmail);
  console.log(clientEmails);
  const processedEmail = {
    status: "Successfully received the email",
    data: newEmail,
  };
  res.json(processedEmail);
});
