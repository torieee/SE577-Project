
  <template>
   <h1><span class="header-color">GitHub Front End Home</span></h1>
    <p>Welcome to my GitHub frontend! This project showcases what I've learned from SE 577 (Software Architecture). <br> <br>
      The project contains an API which links to an internal, hardcoded database of my GitHub repositories, and uses a personal
      <br> access token to access the GitHub API to display a list of my repositories from there.
    <br><br></p>
    <h3>Preview of the GitHub Front End</h3>
    <p>This is a GitHub Gist that shows code to print "Hello world" in Python. The URL for this Gist is embedded into the <br>
     program. Let me know if you like this Gist!</p>
  
    <br><br>

    <!--Note: I made a component that was a regular HTML file to embed the gist because Vue doesn't allow scoped attributes-->
    <div class="html-component">
      <iframe :src="gistHTML" frameborder="0"></iframe>
    </div>


    <div class="like-dislike">
      <div class="column">
        <img src="src/assets/images/thumb-up.png" class="image-button" @click="handleButtonClickLike">
      </div>
      <div class="column">
        <img src="src/assets/images/thumb-down.png" class="image-button" @click="handleButtonClickDislike">
      </div>
    </div>

    <br><br>
    <div class="message" id="message"></div>


  </template>
    
    <script lang="ts">
    export default {
      name: 'HomePage',
      computed: { //This is the component that holds the gist script
          gistHTML() {
          return 'src/components/Gist.html'
          },
      },
    }
    </script>
    
    <script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import type { GitHubApiInterface, GistInterface } from './ApiInterfaces';
    import axios from 'axios';

      let apiData = ref<GistInterface[]>([])
      onMounted(async () => {
      console.log("Page 2 mounted")

      
      let apiURI = 'https://api.github.com/users/torieee/gists'

      //Use axios to load the student data - readup on await to make
      //async calls easier
      let apiAPI = await axios.get<GistInterface[]>(apiURI)

      let scriptString = 'https://gist.github.com/torieee/8e42a50946731ff3d6974433c025bb0c.js'

      //if OK, set the studentData variable, so that we can render in the ui
      //repoData.value = repoAPI.data
      if(apiAPI.status == 200){
        apiData.value = apiAPI.data
      }
    })
    
    var likeDislike = 2
    function handleButtonClickLike(){
            likeDislike = 1
            buttonClickMessage();
            console.log("like button clicked")
        }
    function handleButtonClickDislike(){
          likeDislike = 0;
          buttonClickMessage();
          console.log("dislike button clicked")

        }
    function buttonClickMessage(){
          var message
          if(likeDislike == 0)
          {
            message = 'Sorry you don\'t like it :('
          }
          else if(likeDislike == 1)
          {
            message = 'Glad you like it!'
          }
          else {
            message = ''
          }

          console.log(message)
          var element = document.getElementById("message")
          if (element!= null)
          element.innerHTML = message;
        }

    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
      .column {
        float: left;
        width: 50%;
      }

      iframe {
        margin: auto;
        display: block;
        width: 50%;
        height: auto;
      }

      .like-dislike{
        display: inline;
        margin: auto;
        width: 40%;
      }
      
      img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;

      }

      .column{
        width: 5%;
        flex: 50%;
        margin-left: 20%;
        padding-left: 10%;
      }

      .message{
          
        color:hsla(175, 45%, 45%, 0.982);
        font-weight: 400;
        font-size: 30px;
        text-align: center;
      }

    </style>
