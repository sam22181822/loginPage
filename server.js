const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Dummy user (for testing)
const user = {
    email: "test@gmail.com",
    password: "123456"
};

// Login API
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (email === user.email && password === user.password) {
        res.json({ success: true, message: "Login successful" });
    } else {
        res.json({ success: false, message: "Invalid email or password" });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});