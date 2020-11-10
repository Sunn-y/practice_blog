<template lang="html">
  <div>
    <h1>test Edit</h1>
    <p>userid : {{userid}}</p>
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
