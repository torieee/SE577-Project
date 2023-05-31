<template>
  <br>
  <h1><span class="header-color">Internal GitHub Database</span></h1>
 <p> 
  This is a list of repositories that is rendered by using an internal JSON database that contains hard coded data. <br>
  The repositories are accessed through the server and formatted based on the API interface for the mock data.
  <br><br>
 </p>

 <h3>
  List of repositories from the internal database:
 </h3>

  <div class="repo-list" v-if="repoData.length > 0">
    <table>
      <tr>
        <th>Repository Name: </th>
        <th>Description: </th>
        <th>Last Updated: </th>
      </tr>
      <tr v-for = "(repo, rowNum) in repoData">
        <td>{{ repo.repo }} &nbsp&nbsp</td>
        <td>&nbsp&nbsp&nbsp&nbsp{{ repo.desc }}&nbsp&nbsp</td>
        <td>&nbsp&nbsp{{ repo.lastUpdated }}</td>
      </tr>
    </table>
  </div>
</template>


<script lang="ts">
    export default {
      name: 'Internal',
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

      let allRepoURI = 'http://localhost:9500/repos'

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
  .repo-list{
    color:hsla(31, 19%, 51%, 0.982);
  }

</style>