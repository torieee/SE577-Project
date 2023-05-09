<template>
    <div>
      <h1>Passion Project Repositories</h1>
      <ul>
        <li v-for="repository in repositories" :key="repository.name">
          {{ repository.name }} - {{ repository.description }}
        </li>
      </ul>
    </div>
  </template>
  
<script lang="ts">


</script>