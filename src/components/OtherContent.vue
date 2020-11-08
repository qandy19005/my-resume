<template>
    <div>
        <div class="grid-box">
            <div>
                <p class="ml5">
                    <span class="text-wrapper">
                        <span class="letters">{{$t('exosite')}}</span>
                        <span class="letters" style="font-size:18px"> 2017 / 07  - 2018 / 06 </span>
                    </span>
                </p>
                <p style="font-size:18px"><i class="fas fa-user"></i> {{$t('intern-qa')}}</p>
                <div class="exosite-content-box">
                    <h3>{{$t('essential-duties')}}</h3>
                    <p><i class="fas fa-angle-right"></i> Web & API {{$t('automated-test')}} (Robot Framwork)</p>
                    <p><i class="fas fa-angle-right"></i> App {{$t('automated-test')}} (Robot Framwork & Appium) </p>
                    <p><i class="fas fa-angle-right"></i> {{$t('establish-test-environment')}} (Docker) </p>
                    <p><i class="fas fa-angle-right"></i> {{$t('test-tool')}} (Python) </p>
                    <p><i class="fas fa-angle-right"></i> Jekins {{$t('daily-check')}}</p>
                    <br><hr><br>
                    <h3><i class="fas fa-tasks"></i> {{$t('project')}}</h3>
                    <p><i class="far fa-file"></i> HAMVI : {{$t('hamvi-project')}}</p>
                    <p><i class="far fa-file"></i> Murano IOT {{$t('web')}} : {{$t('murano-project')}}</p>
                </div>
            </div>
            <div>
                <p class="ml5">
                    <span class="text-wrapper">
                        <span class="letters">{{$t('bgh')}}</span>
                        <span class="letters" style="font-size:18px"> 2020 / 2 - {{$t('now')}} </span>
                    </span>
                </p>
                <p style="font-size:18px"><i class="fas fa-user"></i> {{$t('blogger')}}</p>
                <div class="bgh-content-box">
                    <h3>{{$t('essential-duties')}}</h3>
                    <p><i class="fas fa-angle-right"></i> {{$t('website-setup')}}</p>
                    <p><i class="fas fa-angle-right"></i> WordPress {{$t('CMS')}} </p>
                    <p><i class="fas fa-angle-right"></i> SEO </p>
                    <p><i class="fas fa-angle-right"></i> Google {{$t('analytics')}}, Google {{$t('search-console')}}</p>
                    <p><i class="fas fa-angle-right"></i> {{$t('web')}} : <a href="https://boardgamehot.com/" target="_blank">{{$t('bgh')}}</a></p>
                    <br><hr><br>
                    <h3>Google Analytics</h3>
                    <img src="./../assets/bgh-analytics.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'
export default {
  methods: {
    textAnimation () {
      const textWrapper = document.querySelector('.ml5')
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>")

      anime.timeline({ loop: true })
        .add({
          targets: '.ml5',
          translateY: ['1.1em', 0],
          translateZ: 0,
          duration: 2500,
          delay: (el, i) => 500 * i
        }).add({
          targets: '.ml5',
          opacity: 0,
          duration: 1000,
          easing: 'easeOutExpo',
          delay: 300000
        })
    }
  },
  mounted () {
    this.textAnimation()
  }
}
</script>

<style lang="scss" scoped>
@mixin content-box{
    font-size: 15px;
    padding: 5px;
    h3{
        background: #313131;
        color: white;
        width:200px;
        padding: 3px 3px 3px 10px;
        margin-bottom: 5px;
    }
    hr{
        border:3px solid #FFCE00;
        background: #FFCE00;
    }
}
div{
    span{
        font-size: 20px;
        color: #C63F3F;
    }
    .grid-box{
        display: grid;
        grid-template-columns: 50% 50%;
        .exosite-content-box{
            margin-right: 50px;
            @include content-box;

        }
        .bgh-content-box{
            @include content-box;
            img{
                width:80%;
                box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
            }
            img:hover{
                width:100%;
                transition: all 0.4s ease 0s;
            }
        }
    }
}
@media screen and (max-width:500px){
    div{
        .grid-box{
            grid-template-columns: 100%;
            .exosite-content-box{
                border-right: none;
                border-bottom: 3px solid #F2F2F2;
                margin-bottom: 50px;
            }

        }
    }
}
.ml5 {
  position: relative;
  font-weight: 900;
  font-size: 20px;
  color: #C63F3F;
}

.ml5 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml5 .letter {
  display: inline-block;
  line-height: 1em;
}
</style>
