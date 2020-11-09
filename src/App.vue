<template>
<v-app>
	<AppNav></AppNav>
	<router-view></router-view>
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
