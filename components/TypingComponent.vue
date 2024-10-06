<script lang="ts" setup>
const text = ref("")
const textLoad = () => {
  setTimeout(() => {
    text.value = " Computer Engineer";
  }, 0);
  setTimeout(() => {
    text.value = " Software Developer";
  }, 4000);
  setTimeout(() => {
    text.value = " Fullstack Creator";
  }, 8000);
}
textLoad();
setInterval(textLoad, 12000)
</script>

<template>
  <div class="typingbody">
    <div class="typingcontainer">
      <span class="typingtext typingsecondtext">{{ text }}</span> 
    </div>

  </div>
  
</template>

<style scoped>


.typingcontainer {

}

.typingcontainer .typingtext{
  position: relative;
  color: #4070F4;
  font-size: 70px;
  font-weight:600;
}

.typingcontainer .typingtext.typingfirsttext {
  color:white;
}

.typingcontainer .typingtext.typingsecondtext:before {
  content: "";
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width: 100%;
  background-color: #010718;
  border-left: 2px solid white;
  animation: animate 4s steps(12) infinite;
}
@keyframes animate{
  40%, 60% {
    left: 100%;
  }
  100% {
    left:0%;
  }
}
</style>
