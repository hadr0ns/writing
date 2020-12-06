<!-- this is where the users will put in info about their assignments and then get resources to help them. the real version of this will probably store assignment info locally if we don't implement a login system. if we do, then we will implement "save assignment and resources for later" functionality -->
<template>
	<div class="home">
		<h1>You are home.</h1>
		<div id="questions">

		</div>
		<div id="show-resources">

		</div>
	</div>

</template>

<script>
	//import axios from 'axios';

	export default {
		name: 'Home',
		data() {
			return {
				assignments: [],
				resources: [],
			}
		},
		methods: {

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
