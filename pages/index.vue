<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import HeadingCard from "../components/HeadingCard.vue"
import HeaderButton from "../components/HeaderButton.vue"
import ProfilePicture from "~/components/ProfilePicture.vue"
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import TypingComponent from "~/components/TypingComponent.vue"
import { ref, onMounted, computed, onUnmounted } from 'vue'
const attrArray = ["Education", "Notable Projects", "Github", "Resume"]
// import Typed from 'typed.js';
// var typed = new Typed(".typing", {
//   strings: ["Software Engineer", "Fullstack Engineer", "AI/ML Engineer", "Data Scientist"],
//   typeSpeed: 80,
//   backSpeed: 20,
//   loop: true
// });
let windowPos = ref(0)
let navBarShow = ref(false)
function handleScroll () {
  windowPos = window.scrollY
  navBarShow.value = window.scrollY > 400;
}
onMounted(() =>{
  window.addEventListener('scroll', handleScroll)
})
onUnmounted (() =>  {
  window.removeEventListener('scroll', handleScroll)
})

</script>


<template>


  <h1 class="text-white z-40 fixed w-full h-[50px] font-mono bg-black">
    <div class="absolute right-20">
      <div class="flex space-x-4">
        <HeaderButton>About Me</HeaderButton>
        <HeaderButton>Skills</HeaderButton>
        <HeaderButton>Projects Me</HeaderButton>
        <HeaderButton>Extras</HeaderButton>
        <a href="/MatthewCurschmanResume.pdf" download target="blank">
          <HeaderButton class="bg-white text-black flex items-center space-x-2">
          Resume
        <ArrowDownTrayIcon class="h-5 w-5 text-black-500" />
        </HeaderButton>
        </a>
        
      </div>
    </div>

      

  </h1>

  <div class="section bg-black">
    <div>
    </div>
    <h1 class="text-white pl-10 pt-60 ">
      <div>
        Matt Curschman
      </div>
      <div class="pl-20 ">
        <div class="flex flex-row">
          <div class="pr-7">I am a </div>
            <TypingComponent/>
          <!-- <div>
            <VueWriter class="inline text-blue-300" :array="['Computer Engineer', 'Computer Scientist', 'Web Developer']"  :typeSpeed="40" :eraseSpeed="50" :delay="1000" :intervals="200"/>
          </div> -->
        </div>
      </div>
    </h1>
    <h1>
    </h1>
  </div>

  <Section text="About Me" textColor="text-white" color="bg-[#111]" class="h-[700px]">
    <div class="flex flex-row">
      <div class="shrink-0">
        <ProfilePicture image="picture.png" name="myself"/>
      </div>

      <pre class="text-lg">

        <div id="testText">
          Typewriter CSS

        </div>
        My name is Matthew Curschman

        I have a degree in Computer Engineering from the University of Florida. Go Gators!

        I currently work as a Full-Stack web Developer, with a heavy lean on back-end technologies.I have experience
        with Database Creation, Parsing, Integration, and Utilization on large scale projects. My current work project
        is a Parsing application designed to parse large Google Sheets documents, extrapolate their data,and store it
        in a database, where it can then be accessed as an API backend, queried for further information, or have
        subsequent operations ran on it (Conflux Parser).

        My current side projects are a  lexicographic parser designed to parse and read mathematical equations and provide
        their derivative (derivApp), and a personal tracker (Myday)

        My friends describe me as funny, and I like to describe myself as determined. I am an Eagle Scout, have a
        Black Belt in Karate, and enjoy both piano and art as my hobbies. My favorite subjects are
        Computer Science (duh), Math, and Art.
      </pre>
    </div>
  </Section>

  <Section text="Skills" textColor="text-black" color="bg-white" class="h-[800px] mx-auto pb-20">
    <div class="mx-auto text-center pt-20">
      <div class="grid grid-cols-3 px-40 gap-5 pb-10" >
        <SkillCard title="Front End">
          <div class="grid grid-cols-3">
            <SkillImage image="html.png" name="HTML"/>
            <SkillImage image="css.png" name="CSS"/>
            <SkillImage image="tailwind.png" name="Tailwind"/>
          </div>
        </SkillCard>
        <SkillCard title="Back End">
          <div class="grid grid-cols-3">
            <SkillImage  image="php.svg" name="PHP"/>


          </div>
        </SkillCard>
        <SkillCard title="Frameworks">
          <div class="grid grid-cols-3">
            <SkillImage  image="nuxt.png" name="NuxtJS"/>
            <SkillImage  image="vue.webp" name="VueJS"/>
          </div>
        </SkillCard>
        <SkillCard title="Programming Languages">
          <div class="grid grid-cols-3">
            <SkillImage  image="cppimage.png" name="C++" />
            <SkillImage  image="java.svg" name="Java"/>
            <SkillImage  image="js.webp" name="JavaScript"/>
            <SkillImage  image="csharp.png" name="C#"/>
            <SkillImage  image="cimage.png" name="C" />
            <SkillImage  image="python.png" name="Python"/>
          </div>
        </SkillCard>
        <SkillCard title="Version Control">
          <div class="grid grid-cols-3">
            <SkillImage  image="gitlab.png" name="GitLab"/>
            <SkillImage  image="github.png" name="GitHub"/>
          </div>
        </SkillCard>
        <SkillCard title="Databases">
          <div class="grid grid-cols-3">
            <SkillImage  image="sql.png" name="SQL"/>
            <SkillImage  image="mongo.png" name="MongoDB"/>
            <SkillImage  image="maria.png" name="MariaDB"/>
            <SkillImage  image="supabase.png" name="Supabase"/>

          </div>
        </SkillCard>
        <SkillCard title="Cloud">
          <div class="grid grid-cols-3">

          </div>
        </SkillCard>
        <SkillCard title="Third Parties">
          <div class="grid grid-cols-3">

          </div>
        </SkillCard>
        <SkillCard title="Operating Systems">
          <div class="grid grid-cols-3">
            <SkillImage  image="macos.png" name="MacOS"/>
            <SkillImage  image="windows.webp" name="Windows"/>
            <SkillImage  image="linux.png" name="Linux"/>
          </div>
        </SkillCard>
      </div>
    </div>
  </Section>
  <Section text="Projects" textColor="text-white" color="bg-[#111]" class="h-[700px]">
    Deri 
    An app that uses Java and lexical analysis to tokenize and parse characters, rendering the derivative of mathematical equations
    MyDay
    A self improvement app that offers several features such as daily life tracking, exercise tracking, calendar planning, and more
  </Section>
</template>




<style>
.section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
}

.section h1 {
  font-size: 6rem;
  font-family: "Cookie";
  margin: 15px;
  z-index: 1;
  opacity: 0.7;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

@keyframes fade {
  0% { opacity: 0;}
  100% { opacity: 1}
}


/* 
#testText:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: red;
  border-left: 2px solid #4070F4;
  animation: animate 4s steps(5) infinite;
} */
@keyframes animate {
  40%, 60% {
    left: 100%
  }
  100% {
    left: 0%
  }
}


</style>
