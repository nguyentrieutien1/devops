const express = require("express");
const app = express();
app.get("/", (req, res) => {
     return res.json({message: "Hello world"})
})
app.listen(5000, () => {
     console.log("Ung dung dang chay o cong 5000");
})