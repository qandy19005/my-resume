<template>
  <header>
    <h1 id="ml6" class="ml6">
      <span class="text-wrapper">
        <span class="letters">{{$t('resume')}}</span>
      </span>
    </h1>
    <div class="langForm">
        <!--<i class="fa fa-language"></i> <span>{{$t('lang')}}</span> :
        <select id="lang-select" v-model="lang" @change="changeLang(lang)">
            <option value="tw">繁體中文</option>
            <option value="en">English</option>
        </select>-->
        <button :class="[lang==='tw'?'buttonClicked':'']" @click="changeLang('tw')">繁體中文</button> | <button :class="[lang==='en'?'buttonClicked':'']" @click="changeLang('en')">English</button>
    </div>
  </header>
</template>
<script>
import twLang from './../plugins/langs/tw.json'
import enLang from './../plugins/langs/en.json'
import anime from 'animejs/lib/anime.js'

export default {
  data: function () {
    return {
      lang: 'tw'
    }
  },
  methods: {
    changeLang (lang) {
      let msgs = ''
      this.lang = lang
      if (lang === 'tw') {
        msgs = twLang
      } else {
        msgs = enLang
      }
      this.$i18n.setLocaleMessage(lang, msgs)
      this.$i18n.locale = lang
      localStorage.setItem('lang', lang)
    },
    textAnimation () {
      const textWrapper = document.querySelector('.ml6 .letters')
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

      anime.timeline({ loop: true })
        .add({
          targets: '.ml6 .letter',
          translateY: ['1.1em', 0],
          translateZ: 0,
          duration: 750,
          delay: (el, i) => 300 * i
        }).add({
          targets: '.ml6',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 300000
        })
    }
  },
  mounted () {
    this.lang = this.$i18n.locale
    this.textAnimation()
  }
}
</script>
<style lang="scss">
@mixin btnHover{
  height: 28px;
  background: gray;
  color: white;
  padding: 3px;
  border: none;
}

header{
    display: flex;
    padding: 15px 30px;
    background: #313131;
    border-bottom: 5px solid #FFCE00;
    h1{
        color: #EEE;
        font-size: 20px;
        margin: 0 auto;
    }
    .langForm{
      position: absolute;
      right:0;
      color: white;
      font-size: 15px;
      width:150px;
      button{
        height: 30px;
        transition: all 0.4s ease 0s;
        cursor: pointer;
        padding: 5px;
        border: none;
        border-bottom: 3px solid #B8B8B8;
        border-radius: 3px;
      }
      button:hover{
        @include btnHover;
      }
      .buttonClicked{
        @include btnHover;
        border: 1px solid #FFFFFF;
      }
    }
}

@media screen and (max-width:500px){
  header{
    display: block;
    text-align: center;
    h1{
      font-size: 15px;
    }
    .langForm{
      position: static;
      font-size: 10px;
      margin: 0 auto;
    }
  }
}

.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 20px;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml6 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
