<template>
    <div>
      <h2>Repository Details</h2>
      <div>
        <h3>{{ repository.repo }}</h3>
        <p>{{ repository.desc }}</p>
        <!-- Display other repository details as needed -->
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import axios from 'axios';
  export default {
    name: 'RepositoryDetails',
    data() {
      return {
        repository: {} as { repo: string; url: string, desc: string, lastUpdate: string } // Initialize an empty object for the repository data
      };
    },
    mounted() {
      this.fetchRepositoryData(); // Fetch the repository data when the component is mounted
    },
    methods: {
      fetchRepositoryData() {
        const repositoryName = this.$route.params.repositoryName; // Retrieve the repository name from the route parameters
        // Make an API call to the Java server to fetch the repository data
        // Replace the API endpoint with your actual server endpoint
        axios.get(`http://localhost:8080/api/repositories/repos/${repositoryName}`)
          .then(response => {
            this.repository = response.data; // Update the repository data in the component
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>
  