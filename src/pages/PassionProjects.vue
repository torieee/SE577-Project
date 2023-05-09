<template>

       <div>
        <h1> <span class="header-color">Passion Projects</span></h1>
        <p>This is showing the exact same thing as the Class Projects page but I did it a different way and I want to keep it for future reference</p>
        <ul>
          <li v-for="repository in repositories" :key="repository.repo">
            <ul><a :href="repository.url">{{ repository.repo}}</a></ul>
            <ul>{{repository.desc}}</ul>
          </li>
        </ul>
      </div>

  </template>
    
    <script lang="ts">

    import axios from 'axios';

      export default {
        name: 'PassionProjects',
        data() {
          return {
            repositories: [] as { repo: string; url: string, desc: string, lastUpdate: string }[],
          };
        },
        mounted() {
          axios
            .get('http://localhost:8080/repos')
            .then(response => {
              this.repositories = response.data;
              console.log(this.repositories);
            })
            .catch(error => {
              console.error(error);
            });
        },
        methods: {
          getRepositoryUrl(url: string) {
            return url;
          },
        },
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