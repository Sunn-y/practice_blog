<template>
		<v-carousel cycle interval='5000' height="730" hide-delimiter-background show-arrows-on-hover>
			<v-carousel-item v-for="(slide, i) in slides" :key="i">
				<v-sheet :color="colors[i]" height="100%">
					<v-row class="fill-height" align="center" justify="center">
						<div class="display-3" style='padding:30px;'>
							{{ slide }}
						</div>
					</v-row>
				</v-sheet>
			</v-carousel-item>
		</v-carousel>
</template>

<script>
export default {
	data() {
		return {
			colors: [
				'indigo',
				'warning',
				'pink darken-2',
				'red lighten-1',
				'deep-purple accent-4',
			],
			slides: [
				'Thanks for visiting Sunny\'s blog.',
				'I\'m trying to do my best for this blog.',
				'Comming Soon!',
			],
		}
	},
}
</script>
