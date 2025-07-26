 const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/organizers', require('./routes/organizerRoutes'));
app.use('/events', require('./routes/eventRoutes'));
app.use('/attendees', require('./routes/attendeeRoutes'));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

