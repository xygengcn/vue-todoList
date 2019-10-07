<template>
  <div id="app" :class="[{'app':!is_mobile}]">
    <header>
      <img src="./assets/logo.png" />
      <h1>{{title}}</h1>
    </header>
    <router-view name="TodoList" />
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      title: "Todolist",
      is_mobile: false
    };
  },
  methods: {
    isMobile() {
      this.is_mobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
    }
  },
  mounted() {
    this.isMobile();
  }
};
</script>

<style>
body,
html,
div,
ul,
li,
a,
img,
p {
  margin: 0;
  padding: 0;
}
.app {
  width: 480px;
  margin: 20px auto;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
h1,
h2 {
  font-weight: normal;
}
img {
  width: 80px;
}
</style>
