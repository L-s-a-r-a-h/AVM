const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "user_authentication",
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.post('/users', (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";

  if (!req.body.email || !req.body.password) {
    return res.json("Please enter all required fields.");
  }

  db.query(sql, [req.body.email], async (err, data) => {
    if (err) return res.json("Login Failed");

    if(data.length > 0){
      const storedHashedPassword = data[0].password; 
      const passwordMatch = await bcrypt.compare(req.body.password, storedHashedPassword);

      if (passwordMatch) {
        return res.json("Login Successfully");
      } 
      else {
      return res.json("Invlaid email or password");
      }
    } else {
      return res.json("Invalid email or password"); 
    }
    });
  })

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  app.post('/signup', async (req, res) => {
  
    if (!req.body.fullName || !req.body.email || !req.body.password) {
      return res.json("Please enter all required fields.");
    }  
    if (!isValidEmail(req.body.email)) {
        return res.json("Invalid email format.");
    }
    if (req.body.password.length < 8) {
      return res.json("Password must be at least 8 characters long.");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
    db.query('SELECT * FROM users WHERE email = ?', [req.body.email], (err, results) => {
      if (err) {
        return res.json("Internal server error");
      }
    
      if (results.length > 0) {
        return res.json("Email already in use");
      }

      db.query('INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)', [req.body.fullName, req.body.email, hashedPassword], (err, results) => {
        if (err) {
          return res.json("Internal server error");
        }
  
        res.json("Signup successful");
      });
    });
  });
  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
