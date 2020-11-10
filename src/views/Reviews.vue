<template>
		<v-card color="basil">
			<router-view></router-view>
			<v-card-title class="text-center justify-center py-6">
				<h1 class="font-weight-bold display-3 basil--text">
					REVIEWS
				</h1>
			</v-card-title>

			<v-tabs v-model="tab" background-color="transparent" color="basil" grow>
				<v-tab v-for="item in items" :key="item">
					{{ item }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab">
				<v-tab-item v-for="item in items" :key="item">
					<v-card color="basil" flat>
						<v-card-text>{{ text }}</v-card-text>
						<ReviewsContents></ReviewsContents>
					</v-card>
				</v-tab-item>
			</v-tabs-items>
		</v-card>
</template>

<script>
import ReviewsContents from '../components/ReviewsContents.vue'
export default {
	components: {
		ReviewsContents,
	},
	data() {
		return {
			tab: null,
			items: [
				'BOOKS', 'MOVIES', 'LECTURES', 'ETC',
			],
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
		}
	},
}
</script>

<style>
/* Helper classes */
.basil {
	background-color: #FFFBE6 !important;
}

.basil--text {
	color: #356859 !important;
}
</style>
