<template>
  <header class="container-fluid text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 ...">
    <div class="container mx-auto flex justify-between">
      <h1 class="title text-3xl font-extrabold">Todo App</h1>
      <ul class="flex justify-around">
        <li> <nuxt-link to="/">Home</nuxt-link> </li>
        <li> <nuxt-link to="/tribute">Tribute</nuxt-link> </li>
        <li> <nuxt-link to="/todos">Todos</nuxt-link> </li>
        <li> <nuxt-link to="/about">About</nuxt-link> </li>
      </ul>
    </div>
  </header>
</template>

<script>

export default({
  name: "AppHeader"
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@1,800&display=swap');

  .title{
    font-family: 'Merriweather Sans', sans-serif;
    /* font-weight: 600; */
  }
  li {
    display: flex;
    align-items: center;
    padding: 5px;
  }
</style>
