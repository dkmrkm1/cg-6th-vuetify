<template>
  <div id="form-main">
    <div id="form-div">
      <form class="form" id="form1" name="contact" netlify-honeypot="bot-field" data-netlify="true" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden"  style="display: none;">
          <label>Don’t fill this out: <input name="bot-field"></label>
        </p>
        <form-header />
        <p class="name">
          <input name="name" type="text" v-model="edit.name" class="validate[required,custom[onlyLetter],length[0,100]] feedback-input" placeholder="お名前" id="name" />
          <span v-show="!validation.name">名前を入力して下さい。</span>
        </p>
        <p class="email">
          <input name="email" type="text" v-model="edit.mail" class="validate[required,custom[email]] feedback-input" id="email" placeholder="メールアドレス" />
          <span v-show="!validation.mail">メールアドレスを入力して下さい。</span>
        </p>
        <p class="text">
          <textarea name="text" v-model="edit.comment" class="validate[required,length[6,300]] feedback-input" id="comment" placeholder="コメント"></textarea>
          <span v-show="!validation.comment">コメントを入力して下さい。</span>
        </p>
        
        <div class="submit">
          <input type="submit" value="送信" id="button-blue"/>
          <div class="ease"></div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import FormHeader from '~/components/modules/FormHeader.vue'

// var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
  name: 'about-form',
  data () {
    return {
      edit: {
        name: '',
        mail: '',
        comment: ''
      },
      isClick: false
    }
  },
  components: {
    FormHeader
  },
  methods: {
    errorClassObject (key) {
      return {
        'has-error': this.validation[key] === false
      }
    }
  },
  computed: {
    validation () {
      return {
        name: !!this.edit.name.trim(),
        mail: !!this.edit.mail,
        comment: !!this.edit.comment.trim()
      }
    },
    isValid () {
      let validation = this.validation
      return Object.keys(validation).every(function (key) {
        return validation[key]
      })
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);

#feedback-page {
  text-align: center;
}

#form-main {
  width: 100%;
  float: left;
  padding-top: 0px;
}

#form-div {
  background-color: rgba(72, 72, 72, 0.4);
  padding: 35px 35px 35px 50px;
  margin: 15px 0 65px -260px;
  width: 450px;
  float: left;
  left: 50%;
  position: absolute;
  -moz-border-radius: 7px;
  -webkit-border-radius: 7px;
}

#form-div h3 {
  text-align: center;
  margin-bottom: 25px;
  color: #fff;
}

.feedback-input {
  color: #3c3c3c;
  font-weight: 500;
  font-size: 18px;
  border-radius: 0;
  line-height: 22px;
  background-color: #fbfbfb;
  padding: 13px 13px 13px 54px;
  margin-bottom: 10px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border: 3px solid rgba(0, 0, 0, 0);
}

.feedback-input:focus {
  background: #fff;
  box-shadow: 0;
  border: 3px solid #3498db;
  color: #3498db;
  outline: none;
  padding: 13px 13px 13px 54px;
}

.focused {
  color: #30aed6;
  border: #30aed6 solid 3px;
}

/* Icons ---------------------------------- */
#name {
  background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#name:focus {
  background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
  background-size: 30px 30px;
  background-position: 8px 5px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#email {
  background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#email:focus {
  background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

#comment {
  background-image: url(http://rexkirby.com/kirbyandson/images/comment.svg);
  background-size: 30px 30px;
  background-position: 11px 8px;
  background-repeat: no-repeat;
}

textarea {
  width: 100%;
  height: 150px;
  line-height: 150%;
  resize: vertical;
}

input:hover,
textarea:hover,
input:focus,
textarea:focus {
  background-color: white;
}

#button-blue {
  float: left;
  width: 100%;
  border: #fbfbfb solid 4px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  font-size: 24px;
  padding-top: 22px;
  padding-bottom: 22px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  margin-top: -4px;
  font-weight: 700;
}

#button-blue:hover {
  background-color: rgba(0, 0, 0, 0);
  color: #0493bd;
}

.submit:hover {
  color: #3498db;
}

.ease {
  width: 0px;
  height: 74px;
  background-color: #fbfbfb;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  -ms-transition: 0.3s ease;
  transition: 0.3s ease;
}

.submit:hover .ease {
  width: 100%;
  background-color: white;
}

@media only screen and (max-width: 580px) {
  #form-div {
    left: 3%;
    margin-right: 3%;
    width: 88%;
    margin-left: 0;
    padding-left: 3%;
    padding-right: 3%;
  }
}
</style>
