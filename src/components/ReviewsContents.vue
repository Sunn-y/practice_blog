<template>
<v-expansion-panels focusable>
	<v-expansion-panel v-for="(item,i) in items" :key="i">
		<v-expansion-panel-header>{{ item }}</v-expansion-panel-header>
		<v-expansion-panel-content>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</v-expansion-panel-content>
	</v-expansion-panel>
</v-expansion-panels>
</template>

<script>
export default {
	data: () => ({
		items: [
			'BOOK1',
			'BOOK2',
			'BOOK3',
			'BOOK4',
			'BOOK5',
			'BOOK6',
			'BOOK6',
			'BOOK7',
			'BOOK8',
		],
	}),
}
</script>
