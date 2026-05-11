const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.use(express.static(__dirname + '/../'));
app.use('/css', express.static(__dirname + '/../css'));
app.use('/images', express.static(__dirname + '/../images'));

app.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(`\nPOST Request to: ${req.path}`);
    console.log('Body:', req.body);
  }
  next();
});

app.post('/contact', (req, res) => {
  console.log('\nNEW CONTACT FORM SUBMISSION');
  console.log('First Name:', req.body.fname || 'N/A');
  console.log('Last Name:', req.body.lname || 'N/A');
  console.log('Email:', req.body.email || 'N/A');
  console.log('Phone:', req.body.phone_number || 'N/A');
  console.log('Subject:', req.body.subjectMsg || 'N/A');
  console.log('Message:', req.body.msg || 'N/A');
  console.log('Timestamp:', new Date().toISOString());
  console.log('END SUBMISSION\n');
  
  res.send(`
    <h2>Thank you for your message!</h2>
    <p>We've received your information and will get back to you soon.</p>
    <a href="/contact.html">Back to Contact Page</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Serving files from: ${path.resolve(__dirname, '..')}`);
  console.log('Submit contact form data to see it printed here\n');
});

