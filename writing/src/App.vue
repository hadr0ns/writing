<template>
	<div id="app">
		<div class="header">
			<h1>Virtual Interactive Writing Center</h1>
			<div id="nav">
				<router-link to="/">Home</router-link> |
				<router-link to='/browse'>Browse</router-link> |
				<router-link to="/about">About</router-link> |
				<router-link to="/admin">Admin</router-link>
			</div>
		</div>
		<div class="content">
			<router-view/>
		</div>
		<div class="footer">
			<a href ="https://github.com/hadr0ns/writing">GitHub</a>
		</div>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #571845;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #FFC300;
}

.content {
  padding: 10px 100px;
}

</style>
