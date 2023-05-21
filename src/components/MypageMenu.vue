<template>
    <div class="list" style="text-align: center;"><a href="/" class="logo"><img src="../assets/Logo2.png" alt="MATCHED" width="100" height="100"></a></div>
    <div class="list2" @click="setMainTrue">계정 관리</div>
    <div class="list2" @click="setInfoTrue">☻계정 정보</div>
    <div class="list2" @click="setPwTrue">🔒보안</div>
</template>

<script>
export default {
  methods: {
    setMainTrue () {
      this.$emit('change-section', 'Main')
    },
    setInfoTrue () {
      this.$emit('change-section', 'Info')
    },
    setPwTrue () {
      this.$emit('change-section', 'Pw')
    }
  }
}
</script>

<style scoped>
.list {
    height: 20%;
}
.list2 {
    height: 10%;
    text-align: center;
}
</style>
