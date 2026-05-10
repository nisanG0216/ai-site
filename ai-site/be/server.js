const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(__dirname + '/../'));

// Serve CSS files
app.use('/css', express.static(__dirname + '/../css'));

// Serve images
app.use('/images', express.static(__dirname + '/../images'));

// Handle contact form submission
app.post('/contact', (req, res) => {
  console.log('\n=== NEW CONTACT FORM SUBMISSION ===');
  console.log('Name:', req.body.name);
  console.log('Email:', req.body.email);
  console.log('Message:', req.body.message);
  console.log('Timestamp:', new Date().toISOString());
  console.log('====================================\n');
  
  // Send response
  res.send(`
    <h2>Thank you for your message!</h2>
    <p>We've received your information and will get back to you soon.</p>
    <a href="/contact.html">Back to Contact Page</a>
  `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`\n🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${path.resolve(__dirname, '..')}`);
  console.log('🎯 Submit contact form data to see it printed here\n');
});

module.exports = app;
