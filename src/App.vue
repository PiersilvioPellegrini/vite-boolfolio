
<script>
  import TheHeader from "./components/TheHeader.vue"

	export default {
    componets: { TheHeader},
    data(){
      return{

      };
    },
	};
</script>


<template>
  <TheHeader></TheHeader>
  <router-view></router-view>
</template>

<style lang="scss">
	@use "styles/main";
</style>