<template>
  <div id="app" class="m-0">
    <header class="py-5 bg-image-full" style="background-image: url('https://unsplash.it/1900/1080?image=1078');">
      <img class="img-fluid d-block mx-auto" src="css/logo_telosirvo.png" style="width:300px; height:auto " alt="">
    </header>
    <router-view/>
    <!-- Footer -->
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; José Quinteros & Joaquín Rodríguez 2018</p>
      </div>
      <!-- /.container -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
