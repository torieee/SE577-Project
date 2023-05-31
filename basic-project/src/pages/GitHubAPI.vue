<template>
  <br>
  <h1><span class="header-color">GitHub API</span></h1>
 <p>This is a list of repositories that is rendered by using the GitHub API. An authorization token was embedded <br>
  into the server that allows access to these repositories. I chose to show the name of the repository, GitHub's <br>
  unique ID for the repository, the owner (my username), and the URL. There are other identifying factors that could <br>
  also be included in this rendering as defined by the GitHub API documentation. Hover over the repos to see additional <br>
   information.
<br><br>
 </p>

 <h3>List of repositories from GitHub API:</h3>

  <div class="GitHub-API-Integration" v-if="repoData.length > 0">
    <div v-for="repo in apiData" class="repo">
      <p>
        <div class="repo-name"> <strong>{{ repo.name }}</strong>
          <br>
          {{ repo.description }}
        </div>
    
        <div class="repo-info">
          ID:  {{ repo.id }}
          <br>
          Owner: {{ repo.owner.login }} 
          <br>
          Language(s): {{ repo.language }}
          <br>
          Repo URL: <a :href="repo.html_url">{{ repo.html_url }}</a>
          <br><br>
          ReadMe: <br>
          <div v-html="repo.readMe"></div>
          
          
        </div>
      </p> 
    </div>

  </div>
</template>


<script lang="ts">
    export default {
      name: 'GitHubAPI',
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

      let repoAPI = await axios.get<RepoApiInterface[]>(allRepoURI)

      if(repoAPI.status == 200){
        repoData.value = repoAPI.data
      }
    })

    let apiData = ref<GitHubApiInterface[]>([])
      onMounted(async () => {
      console.log("Page 2 mounted")

      let apiURI = 'https://api.github.com/users/torieee/repos'


      let apiAPI = await axios.get<GitHubApiInterface[]>(apiURI)

      if(apiAPI.status == 200){
        apiData.value = apiAPI.data
        
        //This gets the read me of each of the repos in the array and adds it to the read me of the api
        for (const repo of apiData.value) {
          const readmeURL = `https://raw.githubusercontent.com/torieee/${repo.name}/main/README.md`;
          try {
            const response = await axios.get(readmeURL);
            repo.readMe = response.data;
          } catch (error) {
            console.error('Problem with readme', error);
            repo.readMe = 'Error getting readme for this repo';
          }
      }
      }
    })

</script>


    
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .GitHub-API-Integration{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    position: relative;
  }

  .repo{
    padding-left: 15%;
  }

  .repo-name:hover + .repo-info, .repo-info:hover{
    display: block;
    border-style: solid;
    border-width: 1px;
    border-color: hsla(175, 45%, 45%, 0.5);
  }

  .repo-info{
    display: none;
    position: center;
    top: 100%;
    left: 0;
    padding: 10px;
  }



</style>