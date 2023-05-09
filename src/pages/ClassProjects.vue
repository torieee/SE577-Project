<template>
  <br>
  <h1><span class="header-color">Class Projects</span></h1>
 <p> This is the first page</p>

  <!-- Only render this table if there is student data-->
  <div v-if="repoData.length > 0">
    <table>
      <tr>
        <th>Repository Name: </th>
        <th>Description: </th>
        <th>Last Updated: </th>
      </tr>
      <tr v-for = "(repo, rowNum) in repoData">
        <td>{{ repo.repo }}</td>
        <td>{{ repo.desc }}</td>
        <td>{{ repo.lastUpdated }}</td>
      </tr>
    </table>
  </div>
  <p>The number of results is {{ repoData.length }}</p>
</template>


<script lang="ts">
    export default {
      name: 'ClassProjects',
    };
    </script>

    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import type { RepoApiInterface } from './ApiInterfaces';
    import axios from 'axios';

    //Most code goes here
    let repoData = ref<RepoApiInterface[]>([])

    onMounted(async () => {
      console.log("Page 1 mounted")

      //this is where to go and get the student data
      let allRepoURI = 'http://localhost:8080/repos'

      //Use axios to load the student data - readup on await to make
      //async calls easier
      let repoAPI = await axios.get<RepoApiInterface[]>(allRepoURI)

      //if OK, set the studentData variable, so that we can render in the ui
      //repoData.value = repoAPI.data
      if(repoAPI.status == 200){
        repoData.value = repoAPI.data
      }
    })


</script>


    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .column {
        float: right;
        width: 50%;
      }

  h3, h4{
    color:hsla(175, 45%, 45%, 0.982);
  }

</style>