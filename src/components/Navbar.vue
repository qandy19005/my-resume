<template>
    <div class="navbar-box">
        <div class="button-group-box">
            <button v-for="button in navArray" :key="button.id" :class="button.className" @click="setContent(button.value)"><i :class="button.icon"></i><br class="mb-br"> <span>{{button.name}}</span></button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      navArray: [{
        id: 0,
        name: this.$t('about'),
        value: 'about',
        className: 'myself-btn',
        icon: 'far fa-address-card'
      }, {
        id: 1,
        name: this.$t('skill'),
        value: 'skill',
        className: 'langAndSkill-btn',
        icon: 'fas fa-wrench'
      }, {
        id: 2,
        name: this.$t('exp'),
        value: 'exp',
        className: 'experience-btn',
        icon: 'fab fa-black-tie'
      }]
    }
  },
  methods: {
    ...mapActions([
      'setContent'
    ])
  }
}
</script>

<style lang="scss">
.navbar-box{
    width: 100%;
    margin-top: 10px;
    .button-group-box{
        width: 100%;
        button{
            float: left;
            border-radius: 5px;
            margin-top: 10px;
            padding: 5px;
            height: 50px;
            width: 70%;
            font-size: 15px;
            color: #FFF;
            cursor: pointer;
            transition: all 0.4s ease 0s;
        }
        button:hover{
            width: 99%;
            height: 70px;
            transition: all 0.4s ease 0s;
            font-size: 20px;
        }
        .myself-btn{
            background: #335BBD;
            border: 3px solid #0F1963;
        }
        .langAndSkill-btn{
            background: #F5A905;
            border: 3px solid #B96A2C;
        }
        .experience-btn{
            background: #C04556;
            border: 3px solid #77132D;
        }
    }
}

.cp-br{
    display: block;
}
.mb-br{
    display: none;
}
@media screen and (max-width:1200px){
    .navbar-box{
        margin: 10px auto;
        .button-group-box{
            button{
                width: 30% !important;
                height: 100px;
                margin: 15px 5px;
                font-size:18px;
                float: none;
            }
            button:hover{
                width: 30%;
                height: 100px;
                font-size: 18px;
            }
        }
    }
    .cp-br{
        display: none;
    }
    .mb-br{
        display: block;
    }
}
@media screen and (max-width:500px){
    .navbar-box{
        .button-group-box{
            button{
                font-size:12px;
                height: 70px;
            }
            button:hover{
                height: 70px;
                font-size: 12px;
            }
        }
    }
    .cp-br{
        display: none;
    }
    .mb-br{
        display: block;
    }
}
</style>
