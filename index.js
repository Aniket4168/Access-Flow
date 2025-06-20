const express= require("express");
const app = express();

const userRoutes = require("./routes/User");

const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {cloudinaryConnect} = require("./config/cloudinary");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const PORT = process.env.PORT;

//database connect
database.connectDb();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors ({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
);

//cloudinary connect
cloudinaryConnect();

//routes mounting
app.use("/api/v1/auth", userRoutes);


//default route
app.get("/", (req, res) => {
    return res.json({
        success:true,
        message:"Your server is started and running"
    });
});

//activate the server
app.listen(PORT, ()=> {
    try {
        console.log(`App is running at port: ${PORT}`);
    }
    catch(error) {
        console.log(error);
        
    }
});