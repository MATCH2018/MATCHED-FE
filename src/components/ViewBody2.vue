<template>
    <div class="title">
        <h1>동아리 게시판</h1>
    </div>
    <div class="titles">
        <div  v-for="Board in Boards" :key="Board.id" class="list">
            <router-link :to="`/Board/club/view/${Board.id}`" class="article">
                <h2 class="medium">{{ Board.title }}</h2>
                <p class="small">{{ Board.content }}</p>
                <time class="small">{{ gettimedif(Board.timestamp) }}</time>
            </router-link>
        </div>
        <div class="bottom">
            <form id="search" class="search" @submit.prevent="search">
            <select name="search_type" v-model="searchParams.search_type">
                <option value=4>전체</option>
                <option value=3>태그</option>
                <option value=2>글 제목</option>
                <option value=1>글 내용</option>
            </select>
            <input name="keyword" placeholder="검색어를 입력하세요" class="text" v-model="searchParams.keyword">
            <button type="submit">검색</button>
        </form>
            <button v-if="showBeforeButton" class="next" @click="loadPrePage()">이전</button>
            <button v-if="showNextButton" class="next" @click="loadNextPage()">다음</button>
            <button class="next" @click="gowrite()">글쓰기</button>
        </div>
    </div>
    </template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      Boards: [],
      currentPage: 1,
      pageSize: 4,
      showNextButton: false,
      showBeforeButton: false,
      Board1: false,
      Board2: false,
      Board3: false,
      Board4: false,
      searchParams: { search_type: 4, keyword: '' }
    }
  },
  mounted () {
    this.loadPage()
  },
  methods: {
    loadNextPage () {
      this.currentPage++
      this.loadPage()
      this.showBeforeButton = true
    },
    loadPrePage () {
      this.currentPage--
      this.loadPage()
      if (this.currentPage === 1) this.showBeforeButton = false
    },
    loadPage () {
      const params = {
        _page: this.currentPage,
        _limit: this.pageSize,
        _sort: 'id',
        _order: 'desc'
      }
      if (this.searchParams.search_type !== '4' && this.searchParams.keyword !== '') {
        let searchParamKey = null
        if (this.searchParams.search_type === '3') {
          searchParamKey = 'tags_like'
        } else if (this.searchParams.search_type === '2') {
          searchParamKey = 'title_like'
        } else if (this.searchParams.search_type === '1') {
          searchParamKey = 'content_like'
        }
        console.log(this.searchParams.search_type)
        console.log(searchParamKey)
        if (searchParamKey !== null) {
          params[searchParamKey] = this.searchParams.keyword
        }
      }
      axios
        .get('http://localhost:3000/club', { params })
        .then(response => {
          this.Boards = response.data
          this.showNextButton = response.headers['x-total-count'] > this.currentPage * this.pageSize
        })
        .catch(error => {
          alert(error)
        })
    },
    gettimedif (timestamp) {
      const now = new Date().getTime()
      const diffMs = now - timestamp
      const diffMins = Math.round(diffMs / 1000 / 60)
      if (diffMins < 60) {
        return diffMins + '분 전'
      } else if (diffMins < 1440) {
        const diffHours = Math.round(diffMins / 60)
        return diffHours + '시간 전'
      } else {
        const diffDays = Math.round(diffMins / 1440)
        return diffDays + '일 전'
      }
    },
    gowrite () {
      const boards = ['Board1', 'Board2', 'Board3', 'Board4']
      boards.forEach((board, index) => {
        localStorage.setItem(board, index === 1)
      })
      this.$router.push('/BoardWrite')
    },
    search () {
      this.currentPage = 1
      this.showBeforeButton = false
      this.loadPage()
    }
  }
}
</script>

    <style scoped>
    form {
        float: left;
        margin-top: 5px;
        margin-left: 5px;
        padding: 8px 25px 8px 5px;
        border: 1px solid #a6a6a6;
        border-radius: 3px;
    }
    .next {
        float: right;
        margin: 10px;
    }
    .title {
        position: relative;
        left: 20%; top: 10%;
        display: block;
        border: 1px solid gray;
        width: 570px;
        margin: 10px; padding: 15px;
    }
    .titles {
        position: relative;
        margin: 10px;
        width: 600px; height: 100%;
        left: 20%; top: 10%;
    }
    .list {
        display: block;
        padding: 12px;
        border: 1px solid #e3e3e3;
        text-decoration: none;
        text-align: left;
        padding: 15px; width: 600px;
        margin-bottom: -1px;
        box-sizing: border-box;
    }
    *{
        margin: 0;
    }
    .h2.article {
        display: block;
        padding: 15px;
    }
    a {
        text-decoration: none;
    }
    .medium {
        margin-bottom: 5px;
        line-height: 18px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        font-weight: normal;
    }
    .small {
        margin-bottom: 5px;
        max-height: 30px;
        line-height: 15px;
        white-space: normal;
        overflow: hidden;
        color: #a6a6a6;
        font-size: 12px;
    }
    </style>
