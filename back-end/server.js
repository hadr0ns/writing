const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/writing', {
  useNewUrlParser: true
});


const assignmentSchema = new mongoose.Schema({
	studentName: String,
	type: String,
	format: String,
	dueDate: String,
	register: String,
	//add more characteristics

});

const resourceSchema = new mongoose.Schema({

});


const Assignment = mongoose.model('Assignment', assignmentSchema);
const Resource = mongoose.model('Resource', resourceSchema);


//make new assignment
app.post('/api/assignment', async (req, res) => {

});
//add new resource in admin
app.post('/api/resource', async (req, res) => {

});
//delete assignment ('clear')
app.delete('/api/assignment', async (req, res) => {
	try {
		await Assignment.deleteOne({
			_id: req.params.id
		});
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});
//delete resource
app.delete('/api/resource', async (req, res) => {
	try {
		await Resource.deleteOne({
			_id: req.params.id
		});
		res.sendStatus(200);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});
//get a resource based on passed on characteristic
app.get('/api/resource', async (req, res) => {

});



app.listen(3000, () => console.log('Server listening on port 3000!'));
