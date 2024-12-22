var express = require("express");
var fs = require("fs");
var app = express();
// Add middleware for body parsing
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send("Hello, it is my first Express application!");
});

app.listen(1001, function() {
    console.log("Server is running on port 1000");
});

app.get('/about', function(req, res) {
    res.send("This is a basic Express application");
});

app.get('/users/:userId/books/:bookId', function(req, res) {
    res.send(req.params);
});

app.get('/GetStudents', function(req, res) {
    fs.readFile(__dirname + "/" + "Student.json", 'utf8', function(err, data) {
        if (err) {
            return res.status(500).json({ error: "Failed to read student data" });
        }
        res.json({
            'status': true,
            'Status_Code': 200,
            'requested at': new Date().toISOString(),
            'requrl': req.url,
            'request Method': req.method,
            'studentdata': JSON.parse(data)
        });
    });
});

app.get('/GetStudentid/:id', function(req, res) {
    fs.readFile(__dirname + "/" + "Student.json", 'utf8', function(err, data) {
        if (err) {
            return res.status(500).json({ error: "Failed to read student data" });
        }

        var students = JSON.parse(data);
        var student = students["Student" + req.params.id];

        if (student) {
            res.json(student);
        } else {
            res.json({ error: "Student not found" });
        }
    });
});

app.get('/studentinfo', function(req, res) {
    res.sendFile(__dirname + '/StudentInfo.html');
});

app.post('/submit-data', function(req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var Age = req.body.myAge + ' Gender: ' + req.body.gender + ' Qualification: ' + req.body.Qual;
    console.log(req.body);  // Log the entire body for debugging
    res.send({
        status: true,
        message: 'Form Details',
        data: {
            name: name,
            age: Age,
            Qualification: req.body.Qual
        }
    });
});
