const express = require("express");
const cors = require("cors");
document.querySelector("#name").value

const app = express();
const PORT = 3000;


app.use(express.json());


app.use(cors());


app.post("/contact", (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log("---- נתונים מהטופס ----");
  console.log("שם מלא:", name);
  console.log("אימייל:", email);
  console.log("טלפון:", phone);
  console.log("נושא:", subject);
  console.log("תוכן:", message);

  res.json({ message: "הנתונים התקבלו בהצלחה!" });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
