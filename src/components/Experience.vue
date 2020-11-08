<template>
  <div class="exp-box">
  <h1>{{$t('exp')}}</h1>
  <div class="button-group">
    <button v-for="button in btnArray" :key="button.id" :class="button.className" @click="currentPage = button.value">{{$t(button.name)}}</button>
  </div>
  <div class="exp-content-box">
    <LioshutanContent class="fade" v-if="currentPage === 'lioshutan' "/>
    <HipowerContent class="fade" v-else-if="currentPage === 'hipower' "/>
    <OtherContent class="fade" v-else-if="currentPage === 'other' "/>
  </div>
  </div>
</template>

<script>
import LioshutanContent from './LioshutanContent.vue'
import HipowerContent from './HipowerContent.vue'
import OtherContent from './OtherContent.vue'

export default {
  components: {
    LioshutanContent,
    HipowerContent,
    OtherContent
  },
  data: function () {
    return {
      btnArray: [{
        id: 0,
        name: this.$t('lioshutan'),
        value: 'lioshutan',
        className: 'lioshutan-btn'
      }, {
        id: 1,
        name: this.$t('hipower'),
        value: 'hipower',
        className: 'hipower-btn'
      }, {
        id: 2,
        name: this.$t('other'),
        value: 'other',
        className: 'other-btn'
      }],
      currentPage: 'lioshutan'
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.exp-box{
  margin-top: -10px;
  padding: 10px;
  width: 100%;
  h1{
    font-size: 25px;
    text-align: center;
  }
  .button-group{
    text-align: center;
    button{
      cursor: pointer;
      width: 100px;
      height: 30px;
      font-size: 15px;
      color: #313131;
      background: #E7E7E7;
      border: 0.5px solid #F2F2F2;
    }
    button:hover{
      transition: all 250ms linear;
      font-weight: 900;
      text-shadow: 0.1em 0.1em #B8B8B8;
      border: 3px solid #FFCE00;
    }
    .lioshutan-btn{
      border-radius: 8px 0px 0px 8px;
      // background: #C04556;
      // border: 3px solid #77132D;
    }
    // .hipower-btn{
    //   background: #397F3B;
    //   border: 3px solid #276228;
    // }
    .other-btn{
      border-radius: 0px 8px 8px 0px;
      // background: #335BBD;
      // border: 3px solid #0F1963;
    }
  }
}
@media screen and (max-width:500px){
  .exp-box{
    .button-group{
      margin-bottom: 20px;
      button{
        width: 80px;
        height: 28px;
        font-size: 13px;
      }
    }
  }
}
</style>
