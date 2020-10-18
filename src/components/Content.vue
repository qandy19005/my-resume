<template>
  <div class="content-box fade">
    <AboutMe v-if="currentContent=== 'about'"/>
    <Skills v-else-if="currentContent=== 'skill'"/>
    <Experience v-else-if="currentContent=== 'exp'"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Experience from './Experience'
export default {
  components: {
    AboutMe,
    Skills,
    Experience
  },
  computed: {
    ...mapGetters([
      'currentContent'
    ])
  }
}
</script>

<style lang="scss">
.content-box{
    justify-content: space-between;
    align-content: center;
    background: #FFF;
    margin: 50px 30px;
    border: 3px solid gray;
    border-radius: 5px;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 880px;
}

@media screen and (max-width:1200px){
    .content-box{
        margin: 50px 10px;
    }
}

@media screen and (max-width:500px){
    .content-box{
        margin: 50px 5px;
    }
}
</style>
