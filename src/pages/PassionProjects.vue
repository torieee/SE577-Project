<template>
      <h1> <span class="header-color">Passion Projects</span></h1>
      <p>This page will show projects that I've made outside of school that I'm passionate about</p>
      <p>Talking about what I'm passionate about and why blah blah blah</p>

      <div class="column">
          <h3>Name of Project 1</h3>
          <p>Description of Project 1 <br>Image showing P1 <br>Github interfacing</p>
          <br>
        </div>
        <div class="column">
          <h3>Name of Project 2</h3>
          <p>Description of Project 2 <br>Image showing P2 <br>Github interfacing</p>
          <br>
       </div>
       <br><br><br>
  </template>
    
    <script lang="ts">
    export default {
      name: 'PassionProjects',
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