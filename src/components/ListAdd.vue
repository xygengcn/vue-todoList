<template>
  <p>
    <input type="text" v-model="content" />
    <input type="button" value="添加" @click="add" />
  </p>
</template>

<script>
export default {
  name: "ListAdd",
  data() {
    return {
      content: ""
    };
  },
  methods: {
    add(data) {
      var data = {
        id: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
        content: this.content,
        time: new Date(),
        status: true
      };
      var olddata = JSON.parse(localStorage.getItem("vue-todolist") || "[]");
      olddata.unshift(data);
      localStorage.setItem("vue-todolist", JSON.stringify(olddata));
      this.content = "";
      this.$emit("Init");
    }
  }
};
</script>
<style scoped>
p {
  display: flex;
  margin: 10px;
}
p input {
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  border: none;
  font-size: 16px;
  outline: none;
}
p input:first-child {
  flex: 8;
  background: #fc9d9a;
  margin-right: 10px;
}
p input:last-child {
  flex: 2;
  background: #fe4365;
}
</style>