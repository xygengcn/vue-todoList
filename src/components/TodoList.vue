<template>
  <div>
    <div class="list">
      <transition-group tag="ul" appear>
        <li v-for="(item,i) in list" :key="item.id" @click="done(item,i)">
          <p :class="[{'done':!item.status}]">
            {{item.content}}
            <span v-if="!item.status">已完成</span>
          </p>
        </li>
      </transition-group>
    </div>
    <ListAdd @Init="Init" :list="list"></ListAdd>
  </div>
</template>
<script>
import ListAdd from "./ListAdd";
export default {
  name: "TodoList",
  data() {
    return {
      list: [
        {
          id: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
          content: "早起做早餐",
          time: new Date(),
          status: true
        },
        {
          id: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
          content: "睡前完成作业",
          time: new Date(),
          status: true
        },
        {
          id: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
          content: "按时吃药",
          time: new Date(),
          status: true
        },
        {
          id: Math.floor(Math.random() * (99999 - 10000 + 1) + 10000),
          content: "到点锻炼了",
          time: new Date(),
          status: true
        }
      ]
    };
  },
  methods: {
    Init() {
      if (localStorage.getItem("vue-todolist")) {
        this.list = JSON.parse(localStorage.getItem("vue-todolist") || "[]");
      } else {
        localStorage.setItem("vue-todolist", JSON.stringify(this.list));
      }
    },
    done(item, index) {
      if (!item.status) {
        this.list.splice(index, 1);
      } else {
        item.status = false;
      }
      localStorage.setItem("vue-todolist", JSON.stringify(this.list));
    }
  },
  components: {
    ListAdd: ListAdd
  },
  created() {
    this.Init();
    console.log(this.list);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

/* v-enter-active 【入场动画的时间段】 */
/* v-leave-active 【离场动画的时间段】 */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease;
}

/* 下面固定写法 实现渐变过渡效果*/
.v-move {
  transition: all 0.8s ease;
}

.v-leave-active {
  position: absolute;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px;
  color: #fff;
  text-align: left;
  border-radius: 5px;
  cursor: pointer;
}
li p {
  padding: 10px;
}
li p span {
  float: right;
}
.list ul li:nth-child(8n-7) {
  background: #8a9b0f;
}
.list ul li:nth-child(8n-6) {
  background: #eb6841;
}
.list ul li:nth-child(8n-5) {
  background: #3fb8af;
}
.list ul li:nth-child(8n-4) {
  background: #fe4365;
}
.list ul li:nth-child(8n-3) {
  background: #fc9d9a;
}
.list ul li:nth-child(8n-2) {
  background: #edc951;
}
.list ul li:nth-child(8n-1) {
  background: #c8c8a9;
}
.list ul li:nth-child(8n) {
  background: #83af9b;
}
.list ul li:first-child {
  background: #036564;
}
.list ul li:last-child {
  background: #3299bb;
}

.done {
  background: #ccc !important;
  border-radius: 5px;
}
</style>
