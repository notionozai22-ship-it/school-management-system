const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>School System</title>
        <style>
          body { font-family: Arial; text-align: center; padding: 50px; background: #f5f5f5; }
          .container { max-width: 600px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🎓 School Management System</h1>
          <p><strong>✅ SUCCESS! Your system is working!</strong></p>
          <p>Next step: Connect database and import your Excel data</p>
          <hr>
          <p>👥 4 Users: admin, user1, user2, user3</p>
          <p>🏫 Ready for your school data</p>
        </div>
      </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 School system running on port ${PORT}`);
});
