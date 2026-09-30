const dotenv = require('dotenv');
const dns = require('dns');

dotenv.config();

// Use Google DNS for MongoDB Atlas SRV lookup
dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = require('./app');
const connectDB = require('./config/db');

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});