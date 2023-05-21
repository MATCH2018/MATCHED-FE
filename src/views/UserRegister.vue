<template>
    <body>
        <section>
            <div class= 'form-box'>
                <div class= 'form-value'>
                    <form action="">
                        <h2>회원가입</h2>
                        <div class="inputbox">
                            <input type="email" v-model="email" required placeholder="@mju.ac.kr">
                            <button v-if="!IsVerify" class="check" @click="gocheck">인증</button>
                            <label for="">이메일</label>
                        </div>
                        <div class="inputbox">
                            <input type="password" v-model="password" required>
                            <label for="">비밀번호</label>
                        </div>ç
                        <div class="inputbox">
                            <input type="password" required v-model="ConfirmPassword">
                            <label for="">비밀번호 확인<div v-if="!passwordMatch">비밀번호가 일치하지 않습니다.</div></label>
                        </div>
                        <div class="inputbox">
                            <input type="name" v-model="name" required>
                            <label for="">이름</label>
                        </div>
                        <div class="inputbox">
                            <input type="department" v-model="department" required>
                            <label for="">학과</label>
                        </div>
                        <div class="inputbox">
                            <label for="">학년</label>
                            <select v-model="grade" required class="grade">
                                <option disabled value="">please select one</option>
                                <option>1학년</option>
                                <option>2학년</option>
                                <option>3학년</option>
                                <option>4학년</option>
                                </select>
                        </div>
                        <div class="inputbox">
                            <label for ="birthdate">생년월일</label>
                            <input type="date"
                            id="birthdate"
                            v-model="birthdate"
                            @change="updateBirthdate">
                        </div>
                        <button @click="register">회원가입</button>
                        <div class="register">
                            <p>로그인 하시겠습니까?<a href="/LoginCheck">로그인</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </body>
</template>
<script>
import { mailOutline, lockClosedOutline } from 'ionicons/icons'
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  data () {
    return {
      birthdate: null,
      email: '',
      password: '',
      ConfirmPassword: '',
      department: '',
      name: '',
      IsVerify: false,
      loading: false,
      grade: ''
    }
  },
  created () {
    const IsVerify = JSON.parse(localStorage.getItem('IsVerify'))
    if (IsVerify) {
      this.IsVerify = IsVerify
    }
  },
  computed: {
    passwordMatch () {
      return this.password === this.ConfirmPassword
    }
  },
  methods: {
    onSubmit () {
      if (!this.passwordMatch) {
        alert('비밀번호가 일치하지 않습니다.')
      }
    },
    gocheck () {
      this.$router.push('/Email_verify')
    },
    register () {
      if (this.IsVerify === true) {
        this.email = this.email.replace('@', '\\@')
        axios.post('http://localhost:3000/users', {
          email: this.email,
          password: this.password,
          birthdate: this.birthdate,
          name: this.name,
          department: this.department,
          grade: this.grade
        })
          .then(response => {
            alert('회원가입이 완료되었습니다.')
            this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
            alert('fault')
          })
      } else {
        alert('이메일 인증이 필요합니다.')
      }
    },
    watch: {
      IsVerify (newValue) {
        if (newValue === false) {
          window.location.reload()
        }
      }
    }
  }
})
</script>

<style scoped>

section{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 130vh;
    width: 100%;
}
input::placeholder {
    text-align: right;
}
.form-box{
    position: center;
    width: 600px;
    height: 450px;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0, 5);
    border-radius: 20px;
    backdrop-filter: blur(15px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.grade {
    position:absolute;
    right: 10%;
    top: 30%;
}
h2{
    font-size: 2em;
    color: #008b71;
    text-align: center;
}
.inputbox{
    position: relative;
    margin: 30px 0;
    width: 310px;
    height: 60px;
    border-bottom: 2px solid gray;
}
.inputbox label{
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    color: gray;
    font-size: 1em;
    pointer-events: none;
    transition: .5s;
}
input:focus ~ label,
input:valid ~ label{
top: -5px;
}
.inputbox input{
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    padding: 0 35 0 5px;
    color: gray;
}
.inputbox ion-icon{
    position: absolute;
    right: 8px;
    color: gray;
    font-size: 1.2em;
    top: 20 px;
}
.forget{
    margin: -15px 0 15px;
    font-size: .9em;
    color: gray;
    display: flex;
    justify-content: center;
}
.forget label input{
    margin-right: 3px;
}
.forget label a{
    color: gray;
    text-decoration: none;
}
.forget label a:hover{
    text-decoration: underline;
}
.check {
    position: absolute;
    width: 30%;
    right: -40%;
    top: 15%;
}
button{
    width: 100%;
    height: 40px;
    border-radius: 40px;
    background: #008b71;
    border: none;
    outline: none;
    cursor: 1em;
    font-weight: 600;
}
.register{
    font-size: .9em;
    color: #008b71;
    text-align: center;
    margin: 25px 0 10px;
}
.register p a{
    text-decoration: none;
    color: gray;
    font-weight: 600;
}
.register p a:hover{
    text-decoration: underline;
}
input[type="date"] {
    position: relative;
    right:-30%;
}
</style>
