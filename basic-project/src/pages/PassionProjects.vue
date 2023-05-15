<template>
  <br>
  <h1><span class="header-color">Passion Projects</span></h1>
 <p>This is a list of repositories that showcase projects I created that I'm passionate about. Initially, <br>
my passion projects centered around my experience in the financial services industry. I believe that <br>
there is ample opportunity to improve and enhance the technology used in This industry, and I plan <br>to expand
on these projects in the coming months.
<br><br><br>
 </p>

  <!-- Only render this table if there is student data-->
  <div class="repo-list" v-if="repoData.length > 0">
    <table>
      <tr>
        <th>Repository Name: </th>
        <th>Description: </th>
        <th>Last Updated: </th>
      </tr>
      <tr v-for = "(repo, rowNum) in repoData">
        <td v-if="repo.flag == false">{{ repo.repo }}</td>
        <td v-if="repo.flag == false">{{ repo.desc }}</td>
        <td v-if="repo.flag == false">{{ repo.lastUpdated }}</td>
      </tr>
    </table>
  </div>



  <div class="GitHub-API-Integration">
    <br><br>
    <p>___________________________ <br> <strong> FROM GITHUB API </strong></p>

    <p v-for="repo in apiData">
        Name:  {{ repo.name }}
        <br>
        ID:  {{ repo.id }}
        <br>
        Owner: {{ repo.owner.login }} 
        <br>
        Repo URL: {{ repo.html_url }}
      
    </p>

  </div>
</template>


<script lang="ts">
    export default {
      name: 'PassionProjects',
    };
    </script>

    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import type { GitHubApiInterface, RepoApiInterface } from './ApiInterfaces';
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

    let apiData = ref<GitHubApiInterface[]>([])
      onMounted(async () => {
      console.log("Page 2 mounted")

      let apiURI = 'https://api.github.com/users/torieee/repos'

      //Use axios to load the student data - readup on await to make
      //async calls easier
      let apiAPI = await axios.get<GitHubApiInterface[]>(apiURI)

      //if OK, set the studentData variable, so that we can render in the ui
      //repoData.value = repoAPI.data
      if(apiAPI.status == 200){
        apiData.value = apiAPI.data
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