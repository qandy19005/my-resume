<template>
  <div>
    <p class="ml5">
      <span class="text-wrapper">
        <span class="letters">{{$t('hipower')}}</span>
        <span class="letters" style="font-size:18px"> 2019 / 01 - 2020 / 06</span>
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
                <li>Node.js express後端開發，MySQL資料庫建置</li>
                <li>撰寫WebSocket API進行攝影機與顧客端溝通</li>
                <li>Promise async await處理異步問題</li>
                <li>Callback function處理資料庫資料取得問題</li>
            </ol>
            <br>
        </div>
        <hr v-if="showContent==='wsapi'">
        <p :class="['click-project', showContent==='ops'?'project-selected':'']" @click="showContent = 'ops'"><i class="far fa-file"></i> 營運平台系統 : {{$t('hi-pro-2')}}<i  v-if="showContent!=='ops'" class="far fa-hand-point-left"></i></p>
        <div v-show="showContent==='ops'" class="fade object-detail">
            <ol>
                <li>Vue前端開發，PHP後端開發，MySQL資料庫建置</li>
                <li>前端網頁切版設計</li>
                <li>使用Vue Router以SPA架構開發</li>
                <li>i18n多國語言開發</li>
                <li>使用LocalStorage儲存前台相關資訊</li>
                <li>Css3動畫與Sass預處理器開發</li>
                <li>Npm套件管理</li>
                <li>Ｗebpack程式碼編譯、打包以及壓縮</li>
            </ol>
            <div class="detail-imgs images-wrapper">
                <div @click="imgLightBox('ops',0)" class="image">
                    <img class="ops-img" src="./../assets/ops-1.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> 使用HTML5的WebRTC技術，進行發票QRcode掃描，並顯示發票相關資訊</p>
                </div>
                <div @click="imgLightBox('ops',1)" class="image">
                    <img class="ops-img" src="./../assets/ops-2.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> 使用HTML5的WebRTC技術，使用點數購買商品</p>
                </div>
            </div>
            <br>
        </div>
        <hr v-if="showContent==='ops'">
        <p :class="['click-project', showContent==='police'?'project-selected':'']" @click="showContent = 'police'"><i class="far fa-file"></i> 台南刑大系統 : {{$t('hi-pro-3')}}<i v-if="showContent!=='police'" class="far fa-hand-point-left"></i></p>
        <div v-show="showContent==='police'" class="fade object-detail">
            <ol>
                <li>Vue前端開發，PHP後端開發，MySQL資料庫建置</li>
                <li>前端網頁切版設計</li>
                <li>Css3動畫與Sass預處理器開發</li>
                <li>串接Google Map API顯示地圖攝影機資訊</li>
                <li>車牌模糊查詢與容錯查詢</li>
                <li>Npm套件管理</li>
                <li>Ｗebpack程式碼編譯、打包以及壓縮</li>
            </ol>
            <div class="detail-imgs images-wrapper">
                <div @click="imgLightBox('police',0)" class="image">
                    <img src="./../assets/police-2.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> 登入頁面</p>
                </div>
                <div @click="imgLightBox('police',1)" class="image">
                    <img src="./../assets/police-1.png"/>
                    <p><i class="far fa-arrow-alt-circle-right"></i> 攝影機相關資訊頁面</p>
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
