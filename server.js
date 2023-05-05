require('dotenv').config();

const http = require('http');

require('./config/dbConnect');

const app = require('./app/app');

const PORT = process.env.PORT || 4000

//================ Middleware Configuartion =======================\\


//====================== Server Configuration  =====================\\
const server = http.createServer(app)
server.listen(PORT, console.log(`Server is running on port ${PORT} `)); 