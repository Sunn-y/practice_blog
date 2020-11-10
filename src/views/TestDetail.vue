<template lang="html">
  <div>
    <h1>test detail</h1>
    <p>userid : {{userid}}</p>
    <v-btn @click="$router.push({name:'TestEdit'})">수정</v-btn>
	</div>
</template>

<script>
export default {
  computed:{
    userid(){
      return this.$route.params.id;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
