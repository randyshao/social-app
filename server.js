const express = require('express');
const connectDB = require('./config/db');

// Initialzing app with express
const app = express();

connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// endpoint, sends a response to the server
app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// App listening on a PORT variable OR 5000
const PORT = process.env.PORT || 5000;

// Listening to a PORT Callback
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
