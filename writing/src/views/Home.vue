<!-- this is where the users will put in info about their assignments and then get resources to help them. the real version of this will probably store assignment info locally if we don't implement a login system. if we do, then we will implement "save assignment and resources for later" functionality -->
<template>
	<div class="home">
		<h1>You are home.</h1>
		<div id="questions">
			<input v-model="assignmentType" placeholder="Input Assignment Type Here" />
			<input v-model="assignmentConcern" placeholder="Input Assignment Concern Here" />
			<button @click="add">Add</button>
		</div>
		<div id="assignment" v-for="assignment in assignments" :key="assignment.id">
			<h1>Type: {{assignment.type}}</h1>
			<h1>Concern: {{assignment.concern}}</h1>
		</div>
		<div id="show-resources" v-if="matchingResources.length > 0">
			<h1>Resources to help you:</h1>
			<div class="resource" v-for="resource in matchingResources" :key="resource.id">
				<p>Name: {{resource.name}}</p>
				<p>Type: {{resource.type}}</p>
				<p><a :href=resource.link>Link</a></p>
			</div>
		</div>
		<div id="clear">
			<button @click="clear">Clear</button>
		</div>
	</div>

</template>

<script>
	import axios from 'axios';

	export default {
		name: 'Home',
		data() {
			return {
				assignments: [],
				resources: [],
				matchingResources:[],
				assignmentType: "",
				assignmentConcern: ""
			}
		},
		methods: {
			async matchResource(){
				try {
					let response = await axios.get("/api/resource");
					this.resources = response.data;
					for (let i = 0; i < this.resources.length; i += 1){
						if (this.resources[i].type === this.assignmentConcern){
							this.matchingResources.push(this.resources[i]);
						}
					}
					return true;
				} catch (error) {
					//console.log(error);
				}
			},
			async add(){
				try {
					await axios.post('/api/assignment', {
						type: this.assignmentType,
						concern: this.assignmentConcern,
					});
					this.getAssignments();
					this.matchResource();
					return true;
				} catch (error) {
					//console.log(error);
				}
			},
			async getAssignments(){
				try {
					let response = await axios.get('/api/assignment');
					this.assignments = response.data;
					return true;
				} catch (error) {
					//console.log(error);
				}
			},
			async clear() {
				try {
					for (let i = 0; i < this.assignments.length; i += 1) {
						await axios.delete('/api/assignment/' + this.assignments[i]._id)
					}
					this.getAssignments();
					this.matchResource();
					return true;
				} catch (error) {
					//console.log(error);
				}
			},
		},
	}
</script>
<style scoped>

#questions {

}

#show-resources {

}

.button-set {

}

.question {

}

</style>
