/**
 * Created by Administrator on 2016/11/2.
 */
var express = require('express');
var app = express();
app.use(express.static('./Ecat'));
app.listen(3000);