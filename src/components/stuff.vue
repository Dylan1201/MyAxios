<template>
  <div class="hello">
    <h1>老黄历查询</h1>
    <h3>请输入要查询的日期</h3>年：
    <input type="number" placeholder="年" v-model="year" />
    月：
    <input type="number" placeholder="月" v-model="month" />
    日：
    <input type="number" placeholder="日" v-model="day" />
    <br />
    <br />
    <button @click="inquire">查询</button>
    <div class="content">
      <h3>已为您查询到{{inquireDate}}</h3>
      <p>生肖：{{animalYear}}</p>
      <p>{{lunarYear}}{{lunar}}</p>
      <p class="suit">
        宜：
        <span v-for="(val,index) in suit" :key="index">{{val}}</span>
      </p>
      <p class="avoid">
        禁：
        <span v-for="(item,index) in avoid" :key="index">{{item}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      year: "",
      month: "",
      day: "",
      inquireDate:'',
      animalYear: "", // 生肖
      avoid: [], // 禁忌
      date: "", // 时间
      lunar: "", // 农历
      lunarYear: "", // 农历年
      suit: [] // 适宜
    };
  },
  methods: {
    inquire() {
      // if (this.year === "" || this.month === "" || this.day) {
      //   alert("请输入要查询的时间");
      // } else {
      const date = this.year + "-" + this.month + "-" + this.day;
      const url = this.HOST + "/day";
      this.axios(url, {
        method: "get",
        params: {
          date: date,
          key: "6775c8bc7d8229a9a02c31ac8ee04579"
        }
      }).then(res => {
        const data = res.data.result.data;
        console.log(data);
        this.inquireDate = this.year+'年'+this.month+'月'+this.day+'日';
        this.animalYear = data.animalsYear;
        this.avoid = data.avoid;
        this.lunar = data.lunar;
        this.lunarYear = data.lunarYear;
        this.suit = data.suit;
      });
      // }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.content {
  width: 800px;
  height: auto;
  margin: 0 auto;
  margin-top: 50px;
  padding: 20px;
  border: 1px dashed darkcyan;
  .suit{
    color: green;
  }
  .avoid{
    color: red;
  }
  p{
    text-align: left;
  }
}
</style>
