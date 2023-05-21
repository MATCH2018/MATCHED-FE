<template>
    <div class="password-reset-container">
        <div class="password-reset-form">
            <h2 class="form-title">비밀번호 찾기</h2>
            <div class="form-group">
                <label for="email">이메일</label>
                <input type="email" id="email" v-model="email" placeholder="이메일을 입력하세요">
            </div>
            <div v-if="!isCodeSent">
                <button class="btn btn-primary" @click="sendCode">인증번호 전송</button>
            </div>
            <div v-else>
                <div class="form-group">
                    <label for="code">인증번호</label>
                    <input type="text" id="code" v-model="code" placeholder="인증번호를 입력하세요">
                </div>
                <button class="btn btn-primary" @click="verifyCode">확인</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      code: '',
      isCodeSent: false
    }
  },
  methods: {
    // sendCode 메소드는 인증번호를 이메일로 전송하는 기능을 수행합니다.
    sendCode () {
      // 이메일 주소가 유효한지 확인합니다.
      if (!this.email) {
        alert('이메일을 입력하세요')
        return
      }
      // 이메일 주소가 유효하다면 인증번호를 전송합니다.
      // 이 부분은 서버와의 통신을 통해 구현되어야 합니다.
      // 서버로부터 인증번호를 받은 후 isCodeSent 값을 true로 변경합니다.
      this.isCodeSent = true
    },
    // verifyCode 메소드는 입력한 인증번호가 유효한지 확인하는 기능을 수행합니다.
    verifyCode () {
      // 입력한 인증번호가 유효한지 확인합니다.
      // 이 부분은 서버와의 통신을 통해 구현되어야 합니다.
      // 서버로부터 인증 결과를 받은 후 비밀번호 재설정 페이지로 이동합니다.
      alert('인증되었습니다.')
    }
  }
}
</script>

<style>
.password-reset-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    border-radius: 40px;
}

.password-reset-form {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.form-title {
    margin-top: 0;
    text-align: center;
}

.form-group {
    margin-bottom: 10px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="email"],
input[type="text"] {
    width: 95%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 40px;
    font-size: 16px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    background-color: #008b71   ;
    border-radius: 40px;
    color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #0069d9;
}
</style>
