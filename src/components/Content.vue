<template>
  <div class="content-box fade">
    <AboutMe class="fade" v-if="currentContent=== 'about'"/>
    <Skills class="fade" v-else-if="currentContent=== 'skill'"/>
    <Experience class="fade" v-else-if="currentContent=== 'exp'" :key="changeLang"/>
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
    ]),
    changeLang: function () {
      return this.$i18n.locale
    }
  }
}
</script>

<style lang="scss">
.content-box{
    justify-content: space-between;
    align-content: center;
    background: #E6E6E6;
    margin: 50px 30px;
    border: 3px solid gray;
    border-radius: 5px;
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 100%;
    color: #313131;
    padding: 10px;
    overflow: auto;
    max-height: 700px;
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
