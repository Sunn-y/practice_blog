<template>
<v-card>
	<v-navigation-drawer app v-model="drawer" :mini-variant.sync="mini" permanent dark src="https://t1.daumcdn.net/cfile/tistory/162E5733512F331B04">
		<v-list-item class="px-2">
			<v-list-item-avatar>
				<v-img src="https://avatars3.githubusercontent.com/u/71953614?s=460&u=7eaa3b79d1ec9147c36c8693bdcaf7dddafe5614&v=4"></v-img>
			</v-list-item-avatar>

			<v-list-item-title>{{ userName }}</v-list-item-title>

			<v-icon style="cursor: pointer;" onclick="location.href='https://github.com/Sunn-y'">mdi-github</v-icon>

			<v-btn icon @click.stop="mini = !mini">
				<v-icon>mdi-chevron-left</v-icon>
			</v-btn>
		</v-list-item>

		<v-divider></v-divider>

		<v-list dense>
			<v-list-item v-for="([icon, text, uri], i) in items" :key="i" link router :to='{name: uri}' exact>
				<v-list-item-icon>
					<v-icon>{{ icon }}</v-icon>
				</v-list-item-icon>
				<v-list-item-content>
					<v-list-item-title>{{ text }}</v-list-item-title>
				</v-list-item-content>

			</v-list-item>
		</v-list>
		<AppFooter v-show='mini === false'></AppFooter>
	</v-navigation-drawer>
</v-card>
</template>

<script>
import AppFooter from './AppFooter.vue'
export default {
	components: {
		AppFooter,
	},
	data: () => ({
		drawer: true,
		mini: true,
		userName: 'Sunny Day☀',
		items: [
			['mdi-home', 'HOME', 'Home'],
			['mdi-account', 'ABOUT', 'About'],
			['mdi-badge-account-horizontal', 'PORTFOLIO', 'Portfolio'],
			['mdi-head-lightbulb-outline', 'THOUGHTS', 'Thoughts'],
			['mdi-book-open-variant', 'LEARNINGS', 'Learnings'],
			['mdi-file-document-edit', 'REVIEWS', 'Reviews'],
			['mdi-wallet-travel', 'TRAVELS', 'Travels'],
			['mdi-cards-spade', 'TEST', 'Test'],
		],
	}),
}
</script>
