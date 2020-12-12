<!-- This is where resources are added and deleted. change functionality will probably be in the real thing, but not for now. -->
<template>
	<div class="admin">
		<h1>Admin: Resource Management</h1>
		<div class="add">
			<div class="form">
				<input v-model="name" placeholder="Name" />
				<input v-model="type" placeholder="Type" />
				<input v-model="link" placeholder="Link" />
				<button @click="add">Add</button>
			</div>
		</div>
		<div class="resources">
			<div class="resource" v-for="resource in resources" :key="resource.id">
				<h1>{{resource.name}}</h1>
				<p>{{resource.type}}</p>
				<p><a :href=resource.link>Link</a></p>
				<button @click="deleteResource(resource)">Delete</button>
			</div>

		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	data() {
		return {
			resources: [],
			name: "",
			type: "",
			link: "",
			//selectResource: null,
		}
	},
	created() {
		this.getResources();
	},
	methods: {
		async add() {
			try {
				await axios.post('/api/resource', {
					name: this.name,
					type: this.type,
					link: this.link
				});
				this.getResources();
				return true;
			} catch (error) {
				//console.log(error);
			}
		},

		async deleteResource(resource) {
			try {
				await axios.delete("/api/resource/" + resource._id);
				this.getResources();
				return true;
			} catch (error) {
				//console.log(error);
			}
		},
		async getResources() {
			try {
				let response = await axios.get("/api/resource");
				this.resources = response.data;
				return true;
			} catch (error) {
				//console.log(error);
			}
		}
	}
}
</script>

<style scoped>

.admin {

}

.resources {

}

.resource {

}

</style>
