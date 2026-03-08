const express = require("express");
const cors= require("cors");
const logger = require("./src/middleware/logger");
const coursesRoutes = require("./src/routes/courses");
const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use("/", coursesRoutes);
app.listen(3000,()=>{
    console.log("Server running on port 3000");
    
});