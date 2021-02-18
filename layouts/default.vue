<template>
  <div class="bg-gray-200 min-hight">
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
import Appheader from '../components/Common/AppHeader';

export default {
  components: {
    Appheader
  }
}

</script>

<style scoped>
  .min-hight{
    min-height: 100vh;
  }
</style>
