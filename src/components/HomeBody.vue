<template>
<div class="card-container">
    <div class="card">
        <div class="board">
            <h3><a href="/Board/tutoring">튜터링 게시판</a></h3>
        </div>
    </div>
    <div class="card">
        <div class="board">
            <h3><a href="/Board/club">동아리 게시판</a></h3>
        </div>
    </div>
    <div class="card">
        <div class="board">
            <h3><a href="/Board/capstone">캡스톤 게시판</a></h3>
        </div>
    </div>
    <div class="card">
        <div class="board">
          <h3><a href="/Board/poom">품앗이 게시판</a></h3>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      board1: [],
      board2: [],
      board3: [],
      board4: []
    }
  },
  mounted () {
    axios.get('http://13.124.173.243:8080/board/notice')
      .then(response => {
        this.board2 = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 20px;
}

.card {
  width: calc(50% - 10px);
  min-width: 300px;
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.board {
  padding: 20px;
  height: 300px;
}

.board h3 {
  margin: 0;
  padding: 10px 0;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background-color: #f9f9f9;
  border-bottom: 1px solid #ddd;
}

.board li {
  list-style: none;
  margin: 10px 0;
}

.board li a {
  text-decoration: none;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
}

.board li a:hover {
  color: #ff6600;
}

</style>
