<script lang="ts" setup>
const text = ref("hello world")
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
      <span class="typingtext typingfirsttext">I am a</span> 
      <span class="typingtext typingsecondtext">{{ text }}</span> 
  
</template>

<style scoped>
.typingbody {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #010718;
  overflow: hidden;
}

.typingcontainer{

}

.typingcontainer .typingtext{
  position: relative;
  color: #4070F4;
  font-size: 30px;
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
  border-left: 2px solid #4070F4;
  animation: animate 4s steps(12) infinite;
}
@keyframes animate{
  40%, 60% {
    left: 100%;
  }
  100% {
    left:0%
  }
}
</style>
