<template>
  <div>
    <div class="score">
      <div>
        <span>4.5</span>
      </div>
      <div>
        <p>商家评分</p>
        <p>00000</p>
      </div>
      <div>
        <p>味道</p>
        <p>3.8</p>
      </div>
      <div>
        <p>包装</p>
        <p>3.9</p>
      </div>
      <div>
        <p>配送</p>
        <p>3.9</p>
      </div>
    </div>
    <div v-for="ele in getdata" :key="ele.id" class="comment-box">
      <div class="comment-ele">

        <div>
          <img :src="ele.avatar" alt="" class="avatar-img">
        </div>
        <div class="comment-right">
          <div class="comment-name">
            <span>{{ele.username}}</span>
            <span>{{ele.rateTime}}</span>
          </div>
          <p>{{ele.text}}</p>
          <img src="" alt="">
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.score {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
}
.comment-box {
  .comment-ele {
    .comment-right {
      flex-grow: 1;
    }
    display: flex;
    .avatar-img {
      width: 8vw;
      height: 8vw;
    }
    .comment-name {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>

<script>
export default {
  name: "evaluate1",
  computed: {
    getdata() {
      return this.$store.state.ratings.ratings
    }
  }
}
</script>
