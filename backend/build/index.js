import express from "express";
let db = {
    hello: "",
};
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/db", (_req, res) => {
    res.json(db);
});
app.post("/db/update", (req, res) => {
    db = req.body;
    res.json(db);
});
app.use(express.static("/dist"));
app.listen(4000);
