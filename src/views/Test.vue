<template lang="html">
  <v-layout row wrap pt-5 text-xs-center style="max-width:500px; margin: 0 auto;">
		<v-flex xs12>
			<h1>Users</h1>
			<p>User를 입력해 주세요.</p>
		</v-flex>
		<v-flex xs12>
			<v-text-field v-model="userid" label="put userid"></v-text-field>
			<v-btn @click="$router.push({name:'TestDetail', params: {
				id: userid
				}})">검색</v-btn>
			</v-flex>
			<router-view></router-view>
	</v-layout>
</template>

<script>
export default {
	data() {
		return {
			userid: null
		}
	}
}
</script>

<style lang="css" scoped>
</style>
