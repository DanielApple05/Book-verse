const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contactUs');


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected')
    )
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('BookVerse API running');
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));