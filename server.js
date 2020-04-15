const express = require("express");

let app = express();
let port = 5000;
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(port, () => {
    console.log(`server is runing on port ${port}`);

});