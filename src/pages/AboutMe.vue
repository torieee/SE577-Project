<template>
  <h1><span class="header-color">About Me</span></h1>

  <div class="row">
    <div class="column">
      <p>Info about me goes here</p>
      <p>blah blah blah <br>blah blah blah</p>
    </div>
    <div class="column">
      <p>Put a nice picture over here possibly</p>
      <p>Or talk about resume? <br>This is a github frontend so maybe have some skills </p>
    </div>
  </div>
  <br><br><br>
</template>
  
  <script lang="ts">
  export default {
    name: 'About',
  };
  </script>
  
  <script setup lang="ts">
  //Most code goes here
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.column {
  float: left;
  width: 50%;
}


</style>