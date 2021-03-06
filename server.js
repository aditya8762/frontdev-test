//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/my-app'));

app.get('/*',(req, res) =>
        res.sendFile('index.html',{root:'dist/my-app'}),
);

app.listen(process.env.PORT || 8080)