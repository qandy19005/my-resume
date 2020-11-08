<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <Header :key="changeLang"/>
    <div class="main-box">
      <LeftSide />
      <Content />
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
import LeftSide from './components/LeftSide'
import Content from './components/Content'
export default {
  components: {
    Header,
    LeftSide,
    Content
  },
  computed: {
    changeLang: function () {
      return this.$i18n.locale
    }
  }
}
</script>>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: 'Fira Sans', sans-serif;
  font-family:'Noto Sans TC', sans-serif;
}

html, body{
  background: #EEE;
  height: 100%;
  min-height: 100%;
}

.main-box{
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1500px;
  margin: 0 auto;
}

.fade {
  animation-name: fadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1s;
}

@media screen and (max-width: 1200px){
  .main-box{
    flex-direction:row;
    flex-wrap: wrap;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fa-hand-point-left{
    color: #A50000;
    position:relative;
    animation:handMove2 1s infinite alternate; /*IE*/
    -moz-animation:handMove2 1s infinite alternate; /*FireFox*/
    -webkit-animation:handMove2 1s infinite alternate; /*Chrome, Safari*/
}
@keyframes handMove2{
    from {left:0%;}
    to {left:2%;}
}
@-moz-keyframes handMove2{
    from {left:0%;}
    to {left:2%;}
}
@-webkit-keyframes handMove2{
    from {left:0%;}
    to {left:2%;}
}
</style>
