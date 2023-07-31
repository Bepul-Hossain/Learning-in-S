import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async () => {

    app.use("/api/v1", (req, res)=>{
        res.send("Hello world")
    });

})();

export default app;

