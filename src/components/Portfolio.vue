<template>
	<v-main>
  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="200"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
              portfolio 1
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="200"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
                    portfolio 2
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              max-height="200"
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
                    portfolio 3
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              max-height="200"
              contain
              class="grey darken-4"
            ></v-img>
            <v-card-title class="title">
                    portfolio 4
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</v-main>
</template>
