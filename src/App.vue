<template>
<v-app>
	<AppNav></AppNav>
	<v-main>
		<v-container fluid>
	<router-view></router-view>
</v-container>
</v-main>
</v-app>
</template>

<script>
import AppNav from './components/AppNav.vue';

export default {
	name: 'App',
	components: {
		AppNav,
	},

	data: () => ({
		//
	}),
};
</script>