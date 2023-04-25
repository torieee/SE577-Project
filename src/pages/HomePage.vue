<template>
   <h1><span class="header-color">GitHub Frontend Home</span></h1>
    <p> This is the home page</p>
    
    <div class="column">
      <p>Random information goes here</p>
      <p>blah blah blah <br>blah blah blah <br>I feel like this page could be merged with the About page maybe</p>
      
    </div>
    <div class="column">
      <p>More information goes over here</p>
      <p>Info info info <br>More info </p>
    </div>
    <br><br><br>
  </template>
    
    <script lang="ts">
    export default {
      name: 'HomePage',
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