<template>
        <h1><span class="header-color">Class Projects</span></h1>
        <p>This page will show projects I'm proud of from my classes</p>

        <div class="column">
          <h3>Name of Project 1</h3>
          <p>Description of Project 1 <br>Image showing P1 <br>Github interfacing</p>
          <br>
          <h3>Name of Project 3</h3>
          <p>Description of Project 3 <br>Image showing P3 <br>Github interfacing</p>
          <br>
          <h3>Name of Project 5</h3>
          <p>Description of Project 5 <br>Image showing P5 <br>Github interfacing</p>
        </div>
        <div class="column">
          <h3>Name of Project 2</h3>
          <p>Description of Project 2 <br>Image showing P2 <br>Github interfacing</p>
          <br>
          <h3>Name of Project 4</h3>
          <p>Description of Project 4 <br>Image showing P4 <br>Github interfacing</p>
          <br>
          <h3>Name of Project 6</h3>
          <p>Description of Project 6 <br>Image showing P6 <br>Github interfacing</p>
          <p><br><br><br><br><br><br><br><br><br><br><br><br></p>
         
       </div>
    
  </template>
    
    <script lang="ts">
    export default {
      name: 'ClassProjects',
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

  h3{
    color:hsla(175, 45%, 45%, 0.982);
  }
</style>