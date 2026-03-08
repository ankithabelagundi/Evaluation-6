const express = require("express");
const cors= require("cors");
const logger = require("./src/middleware/logger");
const courseRoutes = require("./src/routes/courses");
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/", courseRoutes);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
});