<template>
  <h1><span class="header-color">About Me</span></h1>
  <p class="initial">
    Click the dropdowns below to learn about me.
    <br><br><br>
  </p>    
        <div class="education">
          <h2  @click="buttonPressToggleEducation = !buttonPressToggleEducation">
              Education
          </h2>
          <div>
            <p v-show="buttonPressToggleEducation">
                <ul>
                  <strong>Drexel University</strong>
                  <br>MS, Software Engineering
                  <br>Post-Baccalaureate Certificate, Computer Science
                </ul>
                <ul>
                  <strong>Penn State University</strong>
                  <br>BS, Finance
                  <br>Economics Minor
                </ul>
                <ul>
                  <strong>Community College of Allegheny County</strong>
                  <br>AS, Computer Information Systems
                </ul>
            </p>
          </div>
        </div>

        <div class="work">
          <h2  @click="buttonPressToggleWork = !buttonPressToggleWork">
              Work Experience
          </h2>
          <div>
            <p v-show="buttonPressToggleWork">
              After graduating from Penn State, I worked at PNC Private Bank as an investment analyst. 
              I had the opportunity to work on many interesting <br> projects outside of investments, like the Paycheck Protection Program, 
              which was part of the pandemic economic stimulus. 
              <br>I also was part of a fraud investigation team and I even had the opportunity to manage of team of contractors.
              <br><br>
              This summer, I'm looking forward to working at FedEx as a software engineering intern.
              
            </p>
          </div>
        </div>

        <div class="interests">
          <h2  @click="buttonPressToggleInterests = !buttonPressToggleInterests">
              Hobbies and Interests
          </h2>
          <div>
            <p v-show="buttonPressToggleInterests">
              One of my favorite hobbies is still life photography. I love capturing the simple pleasures and beauty of everyday life.
              <br>
              In 2022, I read 76 books! I'm on my 26th book of 2023, and my favorite genres are mystery and thriller. The best book I've ever read 
              <br> was "The Girl with the Dragon Tattoo" by Stieg Larsson. I retired from figure skating after 15 years, and since then I've run two half marathons 
              <br>and participated in a duathalon (a triathalon, minus the swimming). I also enjoy lifting weights, hiking, and DIY projects.

            </p>
          </div>
        </div>

        <div class="gallery">
          <h2  @click="buttonPressToggleGallery = !buttonPressToggleGallery">
              Gallery
          </h2>
          <div class="images-div">
            <p class="imagesp" v-show="buttonPressToggleGallery">
              A few of my favorite shots are below.
              <br>
              <div class="images-col">
                <img src="src/assets/images/birdfeet.JPG" alt="image of sand with bird feet imprints">
                <img src="src/assets/images/bridgetender.JPG" alt="image of boardwal">
                <img src="src/assets/images/bulb.JPG" alt="image of lightbulb on a beach">
                <img src="src/assets/images/butterfly.JPG" alt="image of butterfly">
                <img src="src/assets/images/colin.JPG" alt="image of man dunking a basketball">
                <img src="src/assets/images/ocean2.JPG" alt="ocean from beach">
                <img src="src/assets/images/rope.JPG" alt="rope on a beach">
                <img src="src/assets/images/streetsign.JPG" alt="street signs">
              </div>
              <div class="images-col">
                <img src="src/assets/images/corn.JPG" alt="cornstalks">
                <img src="src/assets/images/egg.JPG" alt="eggs benedict cooked improperly">
                <img src="src/assets/images/hibiscus.JPG" alt="hibiscus flower">
                <img src="src/assets/images/lax1.JPG" alt="lacrosse stick">
                <img src="src/assets/images/lax2.JPG" alt="lacrosse stick">
                <img src="src/assets/images/redleaf.JPG" alt="red leaf">
                <img src="src/assets/images/shoes.JPG" alt="air force one shoes on gravel">
                <img src="src/assets/images/umbrella.JPG" alt="book under an umbrella">
              </div>
              <div class="images-col">
                <img src="src/assets/images/mar.JPG" alt="ocean view">
                <img src="src/assets/images/mooring.JPG" alt="stormy pier">
                <img src="src/assets/images/wantons.JPG" alt="lunch and aperol spritz">
                <img src="src/assets/images/npleaf.JPG" alt="long leaf next to lake">
                <img src="src/assets/images/ocean1.JPG" alt="ocean from beach">
                <img src="src/assets/images/palmbark.JPG" alt="palm tree bark">
                <img src="src/assets/images/retainingwall.JPG" alt="plants growing on a wall">
                <img src="src/assets/images/standingedge.JPG" alt="girl standing on the edge of a wall">
              </div>
              
              
             
            </p>
          </div>
        </div>


  <br><br><br>
</template>
  
  <script lang="ts">
    import { defineComponent } from 'vue';
    import { ref } from 'vue';

    const ShowHideSetup = () => {
      return {
        showMeToggleEducation: ref(false),
        buttonPressToggleEducation: ref(false),
        showMeToggleWork: ref(false),
        buttonPressToggleWork: ref(false),

        showMeToggleInterests: ref(false),
        buttonPressToggleInterests: ref(false),
        showMeToggleGallery: ref(false),
        buttonPressToggleGallery: ref(false),
      };
    };

    export default defineComponent ({
      name: 'About',
      setup() {
        const { showMeToggleEducation, buttonPressToggleEducation } = ShowHideSetup();
        const { showMeToggleWork, buttonPressToggleWork } = ShowHideSetup();
        const { showMeToggleInterests, buttonPressToggleInterests } = ShowHideSetup();
        const { showMeToggleGallery, buttonPressToggleGallery } = ShowHideSetup();
        return {
          showMeToggleEducation,
          buttonPressToggleEducation,
          showMeToggleWork,
          buttonPressToggleWork,

          showMeToggleInterests,
          buttonPressToggleInterests,
          showMeToggleGallery,
          buttonPressToggleGallery,

        }
      }
    });


  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

    .images-col {
        float: left;
        width: 30%;
        padding: 10px;
      }

    img {
      padding: 5px;
      width: 400px;
      height: auto;
    }

    .education{
      text-align: center;
      background-color: hsla(31, 62%, 93%, 0.982);
      padding: 7px;
      margin-left: 50px;
      margin-right: 50px;
    }

    .education p{
      text-align: center;
      margin-left: -32px;
    }

    .work{
      text-align: center;
      background-color: hsla(30, 52%, 90%, 0.982);
      padding: 7px;
      margin-left: 50px;
      margin-right: 50px;
    }

    .interests{
      text-align: center;
      background-color: hsla(30, 45%, 87%, 0.982);
      padding: 7px;
      margin-left: 50px;
      margin-right: 50px;
    }

    .gallery{
      text-align: center;
      background-color: hsla(32, 39%, 84%, 0.982);
      padding: 7px;
      margin-left: 50px;
      margin-right: 50px;
    }

    h2{
      font-weight:normal;
      font-size: x-large;
      color: hsla(34, 11%, 51%, 0.982);
    }

    h2:hover{
      font-weight: bold;
    }


</style>