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
	useNewUrlParser: true,
	useUnifiedTopology: true
});


const assignmentSchema = new mongoose.Schema({
	//studentName: String,
	type: String,
	//format: String,
	//dueDate: String,
	//register: String,
	concern: String,
	//add more characteristics

});

const resourceSchema = new mongoose.Schema({
	type: String,
	link: String,
	name: String
});


const Assignment = mongoose.model('Assignment', assignmentSchema);
const Resource = mongoose.model('Resource', resourceSchema);


//make new assignment
app.post('/api/assignment', async (req, res) => {
	const assignment = new Assignment ({
		type: req.body.type,
		concern: req.body.concern,
	});
	try {
		await assignment.save();
		res.send(assignment);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});
//add new resource in admin
app.post('/api/resource', async (req, res) => {
	const resource = new Resource({
		type: req.body.type,
		link: req.body.link,
		name: req.body.name
	})
	try {
		await resource.save();
		res.send(resource);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
});
//delete assignment ('clear')
app.delete('/api/assignment/:id', async (req, res) => {
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
app.delete('/api/resource/:id', async (req, res) => {
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
//get all resources
app.get('/api/resource', async (req, res) => {
	try {
		let resources = await Resource.find();
		res.send(resources);
	} catch(error) {
		console.log(error);
		res.sendStatus(500);
	}
});

app.get('/api/assignment', async (req, res) => {
	try {
		let assignments = await Assignment.find();
		res.send(assignments);
	} catch(error) {
		console.log(error);
		res.sendStatus(500);
	}
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
