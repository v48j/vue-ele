<template>
  <div class="main">
    <nav>
      <ul>
        <li>
          <router-link active-class="active" exact to="/">点餐</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/evaluate">评价</router-link>
        </li>
        <li>
          <router-link active-class="active" to="/seller">商家</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.main {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      a {
        line-height: 60px;
        color: #777;
      }
    }
  }
  .active {
    border-bottom: 3px solid #00b3d4;
    color: #000;
    font-weight: bold;
  }
  nav {
    border-bottom: 1px solid #aaa;
  }
}
</style>

