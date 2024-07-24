require("./appMongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const userRoute = require("./routes/user-route");

app.use(cors());
app.use(express.json());

app.use("/user", userRoute);

app.listen(8080, () => {
    console.log(`Library App Backend is running in port nuber 8080`);
});