<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
//import RouterLink  from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import FirstPage from './pages/AboutMe.vue'
import SecondPage from './pages/ClassProjects.vue'
import ThirdPage from './pages/PassionProjects.vue'

</script>

<template>
  
  <header>
    <div class="header">
      <nav class="navheader">
          <RouterLink to="/">HOME</RouterLink>
          <RouterLink to="/aboutme">ABOUT ME</RouterLink>
          <RouterLink to="/classprojects">CLASS PROJECTS</RouterLink>
          <RouterLink to="/passionprojects">PASSION PROJECTS</RouterLink>
          <hr>
      </nav>
    </div>
  </header>
  <!--RouterView is the component below the header which changes--> 
  <RouterView />
  <br><br><br>
  <footer>
      <nav>
        <div class="footernav">
          <a href="mailto: victoriamthacker@gmail.com">Email</a>
          <a href="https://github.com/torieee">GitHub</a>
          <a href="https://www.linkedin.com/in/victoriamthacker/">LinkedIn</a>
        </div>
      </nav>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  color: hsla(175, 45%, 45%, 0.982);
}

/* hr is the line between the top nav section and the component below */

.header hr {
  margin-top: 20px;
  height: .75px;
  margin-right: 75px;
  background-color:rgba(120, 109, 101, 0.341);
  border: none;
}

.navheader {
  width: 100%;
  position: fixed;
  top: 0px;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 350;
  text-align: center;
  background-color: white;
}

.footernav {
  width: 100%;
  position: fixed;
  bottom: 0px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 350;
  text-align: center;
  background-color: white;
}

nav a.router-link-exact-active {
  font-weight: 550;
  color: hsla(175, 45%, 45%, 0.982);
}

/* This references the background color of the link of the current page. That's why it's transparent */
nav a.router-link-exact-active:hover {
  background-color: transparent;
}


/* Block for nav links (includes separating lines)*/
nav a {
  display: inline-block;
  font-size: x-large;
  padding: 0 5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}



</style>
