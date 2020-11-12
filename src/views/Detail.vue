<template>
<v-card>
	<router-view/>
	<v-card-title>
		<v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
	</v-card-title>
	<v-data-table light :headers="headers" :items="articles" :search="search" @click:row="warn"></v-data-table>
	<v-card-actions>
		<v-spacer></v-spacer>
		<v-btn outlined rounded text>글쓰기
		</v-btn>
	</v-card-actions>
</v-card>
</template>

<script>
export default {
	data() {
		return {
			search: '',
			headers: [{
					text: 'No',
					align: 'start',
					filterable: false,
					value: 'no',
				},
				{
					text: 'Title',
					value: 'title'
				},
				{
					text: 'Date',
					value: 'date'
				},
				{
					text: 'Views',
					value: 'views'
				},
			],
			articles: [{
					no: 1,
					title: '안녕하세요',
					date: '2020-11-11',
					views: 1,
				},
				{
					no: 2,
					title: '반갑습니다',
					date: '2020-11-12',
					views: 2,
				},
				{
					no: 3,
					title: '또만났군요',
					date: '2020-11-13',
					views: 3,
				},

			],
			clicked: '',
		}
	},
	methods: {
		warn(first) {
			this.clicked = first;
			alert(first.title);
		}
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');

button {
	font-family: 'Do Hyeon', sans-serif;
}
</style>
