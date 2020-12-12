<!-- it may be easy to implement a "look at all our resources page" but I don't know if I will do it for this project -->
<template>
	<div class="browse">
		<h1>Browse Resources</h1>
		<div class="resources">
			<div class="resource" v-for="resource in resources" :key="resource.id">
				<h1>{{resource.name}}</h1>
				<p>{{resource.type}}</p>
				<p><a :href=resource.link>Link</a></p>
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
		}

	},
	created() {
		this.getResources();
	},
	methods: {
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

</style>
