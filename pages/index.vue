<script setup>
import AppLayout from "../layouts/AppLayout.vue"
import HeadingCard from "../components/HeadingCard.vue"
import HeaderButton from "../components/HeaderButton.vue"
import { ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
// import { VueTyper } from 'vue-typer'
import VueWriter from 'vue-writer'
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
  console.log(navBarShow.value)
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
          <div>
            <VueWriter class="inline text-blue-300" :array="['Computer Engineer', 'Computer Scientist', 'Web Developer']"  :typeSpeed="40" :eraseSpeed="50" :delay="1000" :intervals="200"/>
          </div>
        </div>
      </div>
    </h1>
    <h1>
    </h1>
    <div class="video-container">
      <video autoplay loop muted class="md:filter-none">
        <source src="/background.mp4" type="video/mp4">
      </video>
    </div>
  </div>

  <Section text="About Me" textColor="text-white" color="bg-[#111]" class="h-[700px]">
    <div class="flex flex-row">
      <img class="rounded-full pt-10" src="/picture.png" alt="">
      <pre class="text-lg">
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
            <SkillImage image="/html.png"/>
            <SkillImage image="/css.png"/>
            <SkillImage image="/tailwind.png"/>


          </div>
        </SkillCard>
        <SkillCard title="Back End">
          <div class="grid grid-cols-3">
            <SkillImage  image="/php.svg" />


          </div>
        </SkillCard>
        <SkillCard title="Frameworks">
          <div class="grid grid-cols-3">
            <SkillImage  image="/nuxt.png" />


          </div>
        </SkillCard>
        <SkillCard title="Programming Languages">
          <div class="grid grid-cols-3">
            <SkillImage  image="/cppimage.png" />
            <SkillImage  image="/java.svg" />
            <SkillImage  image="/js.webp" />






          </div>
        </SkillCard>
        <SkillCard title="Version Control">
          <div class="grid grid-cols-3">
            <SkillImage  image="/gitlab.png" />
            <SkillImage  image="/github.png" />



          </div>
        </SkillCard>
        <SkillCard title="Databases">
          <div class="grid grid-cols-3">
            <SkillImage  image="/sql.png" />


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
            <SkillImage  image="/macos.png" />
            <SkillImage  image="/windows.webp" />
            <SkillImage  image="/linux.png" />


          </div>
        </SkillCard>

      </div>
    </div>
  </Section>

  <Section text="Projects" textColor="text-white" color="bg-[#111]" class="h-[700px]">
    Hello World
  </Section>


<!--  <AppLayout>-->
<!--    <div >-->
<!--&lt;!&ndash;      <div class="text-white flex items-center justify-center pt-12">&ndash;&gt;-->
<!--&lt;!&ndash;        Matthew Curschman&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--&lt;!&ndash;      <div class="text-white flex items-center justify-center pt-4">&ndash;&gt;-->
<!--&lt;!&ndash;        Computer Engineer&ndash;&gt;-->
<!--&lt;!&ndash;      </div>&ndash;&gt;-->
<!--      <TitleCard></TitleCard>-->
<!--      <Section color="bg-white" text="About Me">-->
<!--        My name is Matthew Curschman and I am a Computer Engineer.-->
<!--      </Section>-->
<!--      <Section color="bg-[#111]" textColor="text-white" text="Experience">-->
<!--        I currently work at conference catalysts-->
<!--      </Section>-->




<!--      </div>-->

<!--  </AppLayout>-->
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


</style>