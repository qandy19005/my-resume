<template>
  <div>
    <p class="ml5">
      <span class="text-wrapper">
        <span class="letters">{{$t('hipower')}}</span>
        <span class="letters" style="font-size:18px"> 2019 / 01 - 2020 / 02</span>
      </span>
    </p>
    <p style="font-size:18px"><i class="fas fa-user"></i> {{$t('full-stack-dev')}}</p>
    <div class="hipower-content-box">
        <h3>{{$t('essential-duties')}}</h3>
        <p><i class="fas fa-angle-right"></i> {{$t('independent-dev')}}</p>
        <p><i class="fas fa-angle-right"></i> {{$t('front-end-web-dev')}} (HTML, CSS, JavaScript, Vue.js, jQuery, NPM, Webpack)</p>
        <p><i class="fas fa-angle-right"></i> RWD (Uikit/Bootstrap/Media Query)</p>
        <p><i class="fas fa-angle-right"></i> SPA (Vue.js, Vue Router)</p>
        <p><i class="fas fa-angle-right"></i> {{$t('multiple-languages')}}(i18n)</p>
        <p><i class="fas fa-angle-right"></i> {{$t('back-end-dev')}} (PHP,Smarty, MySQL(PDO))</p>
        <p><i class="fas fa-angle-right"></i> {{$t('website-setup')}} (Appserv)</p>
        <p><i class="fas fa-angle-right"></i> WebSocket Server & API(Nodejs, PHP) </p>
        <p><i class="fas fa-angle-right"></i> Mocha & should unit test</p>
        <p><i class="fas fa-angle-right"></i> API (Google Map / VXG )</p>
        <p><i class="fas fa-angle-right"></i> Line Bot / SMTP server </p>
        <p><i class="fas fa-angle-right"></i> WebRTC / QRcode</p>
        <br><hr><br>
        <h3><i class="fas fa-tasks"></i> {{$t('project')}}</h3>
        <p :class="['click-project', showContent==='wsapi'?'project-selected':'']" @click="showContent = 'wsapi'"><i class="far fa-file"></i> 國防部車辨系統 : WebSocket API, {{$t('hi-pro-1')}}<i  v-if="showContent!=='wsapi'" class="far fa-hand-point-left"></i></p>
        <div v-show="showContent==='wsapi'" class="fade object-detail">
            <ol>
                <!-- <li>根據顧客需求書開發WebSocket API，讓Server端與顧客端持續連線，進行攝影機與顧客端資料的傳遞</li>
                <li>使用Node.js express後端開發，並自行規劃與建置MySQL資料庫</li>
                <li>使用ES6技術 Promise async await處理異步問題</li>
                <li>Callback function處理資料庫資料取得問題</li>
                <li>使用Mocha撰寫unit test，減少程式碼更改時造成的錯誤</li> -->
                <li>{{$t('wsapi-content-1')}}</li>
                <li>{{$t('wsapi-content-2')}}</li>
                <li>{{$t('wsapi-content-3')}}</li>
                <li>{{$t('wsapi-content-4')}}</li>
                <li>{{$t('wsapi-content-5')}}</li>
            </ol>
            <br>
        </div>
        <hr v-if="showContent==='wsapi'">
        <p :class="['click-project', showContent==='ops'?'project-selected':'']" @click="showContent = 'ops'"><i class="far fa-file"></i> 營運平台系統 : {{$t('hi-pro-2')}}<i  v-if="showContent!=='ops'" class="far fa-hand-point-left"></i></p>
        <div v-show="showContent==='ops'" class="fade object-detail">
            <ol>
                <!-- <li>根據主管需求與架構書，進行前端網頁切版與視覺設計，並規劃與建置MySQL資料庫</li>
                <li>幫公司導入Vue框架進行前端開發，搭配PHP後端開發</li>
                <li>使用Vue Router以SPA架構開發，提高使用者體驗</li>
                <li>使用i18n多國語言開發</li>
                <li>串接Line Bot API，提供店家廣告推播功能</li>
                <li>SMTP server郵件傳送，註冊成功與二次密碼修改通知</li>
                <li>使用LocalStorage儲存前台相關資訊</li>
                <li>Css3動畫與Sass預處理器開發，Ｍedia query手刻RWD手機版</li>
                <li>導入Npm套件管理與Ｗebpack進行程式碼編譯、打包以及壓縮</li> -->
                <li>{{$t('ops-content-1')}}</li>
                <li>{{$t('ops-content-2')}}</li>
                <li>{{$t('ops-content-3')}}</li>
                <li>{{$t('ops-content-4')}}</li>
                <li>{{$t('ops-content-5')}}</li>
                <li>{{$t('ops-content-6')}}</li>
                <li>{{$t('ops-content-7')}}</li>
                <li>{{$t('ops-content-8')}}</li>
                <li>{{$t('ops-content-9')}}</li>
            </ol>
            <div class="detail-imgs images-wrapper">
                <div @click="imgLightBox('ops',0)" class="image">
                    <img class="ops-img" src="./../assets/ops-1.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> {{$t('ops-img-content-1')}}</p>
                </div>
                <div @click="imgLightBox('ops',1)" class="image">
                    <img class="ops-img" src="./../assets/ops-2.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> {{$t('ops-img-content-2')}}</p>
                </div>
            </div>
            <br>
        </div>
        <hr v-if="showContent==='ops'">
        <p :class="['click-project', showContent==='police'?'project-selected':'']" @click="showContent = 'police'"><i class="far fa-file"></i> 台南刑大系統 : {{$t('hi-pro-3')}}<i v-if="showContent!=='police'" class="far fa-hand-point-left"></i></p>
        <div v-show="showContent==='police'" class="fade object-detail">
            <ol>
                <!-- <li>根據顧客需求書與架構書，進行前端網頁切版與視覺設計</li>
                <li>Vue前端開發，搭配PHP後端開發</li>
                <li>Css3動畫與Sass預處理器開發</li>
                <li>串接外部Google Map API顯示地圖攝影機資訊，提高使用者視覺體驗</li>
                <li>車牌模糊查詢與容錯查詢，提供多種方式查詢車牌</li>
                <li>Npm套件管理、Ｗebpack程式碼編譯、打包以及壓縮</li> -->
                <li>{{$t('police-content-1')}}</li>
                <li>{{$t('police-content-2')}}</li>
                <li>{{$t('police-content-3')}}</li>
                <li>{{$t('police-content-4')}}</li>
                <li>{{$t('police-content-5')}}</li>
                <li>{{$t('police-content-6')}}</li>
            </ol>
            <div class="detail-imgs images-wrapper">
                <div @click="imgLightBox('police',0)" class="image">
                    <img src="./../assets/police-2.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> {{$t('police-img-content-1')}}</p>
                </div>
                <div @click="imgLightBox('police',1)" class="image">
                    <img src="./../assets/police-1.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> {{$t('police-img-content-2')}}</p>
                </div>
            </div>
            <br>
        </div>
        <hr v-if="showContent==='police'">
        <p><i class="far fa-file"></i> 高雄落石系統 : {{$t('hi-pro-3')}}</p>
        <p><i class="far fa-file"></i> 警察贓車系統 : {{$t('back-end-dev')}}</p>
        <p><i class="far fa-file"></i> 南投環保局,台南環保局,台南落石系統,南投落石系統 : {{$t('hi-pro-3')}}</p>
    </div>
    <CoolLightBox
        :items="items"
        :index="index"
        @close="closeImgLightBox">
    </CoolLightBox>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.js'
export default {
  data () {
    return {
      showContent: '',
      items: [],
      index: null
    }
  },
  methods: {
    imgLightBox (object, index) {
      this.index = index
      if (object === 'ops') {
        this.items = [
          './../src/assets/ops-1.png',
          './../src/assets/ops-2.png'
        ]
      } else if (object === 'police') {
        this.items = [
          './../src/assets/police-2.png',
          './../src/assets/police-1.png'
        ]
      }
    },
    closeImgLightBox () {
      this.items = [0]
      this.index = null
    },
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
div{
    span{
        font-size: 20px;
        color: #C63F3F;
    }
    .hipower-content-box{
        font-size: 15px;
        padding: 5px;
        .object-detail{
            margin-left: 30px;
            .detail-imgs{
                padding: 5px;
                display: grid;
                grid-template-columns: 50% 50%;
                width:100%;
                div{
                    margin: 10px;
                    img{
                        cursor: pointer;
                        width: 85%;
                        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
                    }
                    .ops-img{
                        width: 50%;
                    }
                }
            }
        }
        .click-project:hover{
            cursor: pointer;
            color: #A50000;
            transition: all 0.4s ease 0s;
        }
        .project-selected{
            transition: all 0.4s ease 0s;
            color: #A50000;
            font-size: 20px;
        }
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
}
@media screen and (max-width:500px){
    div{
        .hipower-content-box{
            border-right: none;
            border-bottom: 3px solid #F2F2F2;
            .object-detail{
                .detail-imgs{
                    grid-template-columns: 100%;
                    div{
                        margin: 0;
                        img{
                            width: 90%;
                        }
                        .ops-img{
                        width: 80%;
                        }
                    }
                }
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
