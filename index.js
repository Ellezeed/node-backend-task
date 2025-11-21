const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding-top: 50px; }
          h1 { color: #333; }
          p { color: #666; font-size: 1.2em; }
          .quote { font-style: italic; color: #007bff; margin-top: 20px; }
        </style>
      </head>
      <body>
        <h1>Student Information</h1>
        <p><strong>Name:</strong> Ira Karrell Catapang</p>
        <p><strong>Program:</strong> Bachelor of Science in Information Technology Major in Business Analytics</p>
        <div class="quote">"Life isn't about finding yourself. Life is about creating yourself""
- George Bernard Shaw</div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});