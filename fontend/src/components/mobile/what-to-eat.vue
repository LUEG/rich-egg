<template>
  <div class="what-to-eat">
    <p class="title">今天<span @click="changType">{{type}}</span>吃<span class="food-name">{{foodName}}</span></p>
    <el-button
      round
      @click="start"
      :disabled="isRun"
    >开始</el-button>
  </div>
</template>

<script>
export default {
  name: 'what-to-eat',
  data () {
    return {
      type: '早餐',
      foodName: '什么呢...',
      list: [
        {
          'name': '早餐',
          'list': ['面包', '蛋糕', '荷包蛋', '烧饼', '饽饽', '肉夹馍', '油条', '馄饨', '火腿', '面条', '小笼包', '玉米粥', '肉包', '煎饼果子', '饺子', '煎蛋', '烧卖', '生煎', '锅贴', '包子', '酸奶', '苹果', '梨', '香蕉', '皮蛋瘦肉粥', '蛋挞', '南瓜粥', '煎饼', '玉米糊', '泡面', '粥', '馒头', '燕麦片', '水煮蛋', '米粉', '豆浆', '牛奶', '花卷', '豆腐脑', '煎饼果子', '小米粥', '黑米糕', '鸡蛋饼', '牛奶布丁', '水果沙拉', '鸡蛋羹', '南瓜馅饼', '鸡蛋灌饼', '奶香小馒头', '八宝粥', '三明治', '豆沙红薯饼', '驴肉火烧', '粥', '蒸饺', '白粥']
        },
        {
          'name': '午餐',
          'list': ['螺蛳粉', '盖浇饭', '酸奶', '苹果', '梨', '香蕉', '皮蛋瘦肉粥', '蛋挞', '煎饼', '泡面', '米粉', '煎饼果子', '水果沙拉', '砂锅', '米线', '麻辣烫', '炒面', '生煎', '快餐', '水果', '馄饨', '水饺', '面条', '小蛋糕', '扬州炒饭', '饭菜', '茶餐厅', '披萨', '麦当劳', 'KFC', '汉堡王', '兰州牛肉面', '沙县小吃', '韩国料理', '粥', '快餐', '桂林米粉', '东南亚菜', '甜点', '川菜', '湘菜', '全家便当']
        },
        {
          'name': '下午茶',
          'list': ['提拉米苏', '一点点', 'COCO', '水果', '桥头排骨', '双皮奶', '果汁', '西米捞', '派', '鸡排', '芋圆', '面包', '蛋糕', '鸡蛋仔', '酸奶', '苹果', '梨', '香蕉', '奶茶', '蛋挞', '鸡翅', '炸鸡']
        },
        {
          'name': '晚餐',
          'list': ['螺蛳粉', '猪肚鸡', '盖浇饭', '砂锅', '米线', '西餐', '麻辣烫', '自助餐', '炒面', '快餐', '面条', '生煎', '水果', '西北风', '馄饨', '火锅', '烧烤', '泡面', '水饺', '日料', '涮羊肉', '味千拉面', '小蛋糕', '扬州炒饭', '自助餐', '饭菜', '茶餐厅', '海底捞', '披萨', '麦当劳', 'KFC', '汉堡王', '兰州牛肉面', '沙县小吃', '烤鱼', '烤肉', '海鲜', '铁板烧', '韩国料理', '粥', '快餐', '桂林米粉', '东南亚菜', '甜点', '川菜', '湘菜', '全家便当', '酸奶', '苹果', '梨', '香蕉', '皮蛋瘦肉粥', '蛋挞', '煎饼', '泡面', '米粉', '煎饼果子', '水果沙拉']
        },
        {
          'name': '夜宵',
          'list': ['小龙虾', '桥头排骨', '鸡排', '鸡翅', '水果', '炸鸡', '螺蛳粉', '面包', '蛋糕', '肉夹馍', '馄饨', '生煎', '锅贴', '酸奶', '苹果', '梨', '香蕉', '泡面', '酸奶', '苹果', '梨', '香蕉', '皮蛋瘦肉粥', '蛋挞', '水果沙拉']
        }
      ],
      timer: '',
      num: 0,
      isRun: false
    }
  },
  methods: {
    start () {
      if (this.num !== 0) {
        this.num = 0
      }
      this.isRun = true
      this.timer = setInterval(this.random, 150)
    },
    random () {
      let foodLists = []
      switch (this.type) {
        case '早餐':
          foodLists = this.list.find(item => item.name === '早餐').list
          break
        case '午餐':
          foodLists = this.list.find(item => item.name === '午餐').list
          break
        case '下午茶':
          foodLists = this.list.find(item => item.name === '下午茶').list
          break
        case '晚餐':
          foodLists = this.list.find(item => item.name === '晚餐').list
          break
        case '夜宵':
          foodLists = this.list.find(item => item.name === '夜宵').list
          break
      }
      this.foodName = foodLists[Math.floor((Math.random() * foodLists.length))]
      this.num = this.num + 1
      if (this.num === 10) {
        clearInterval(this.timer)
        this.isRun = false
      }
    },
    changType () {
      if (this.type === '早餐') this.type = '午餐'
      else if (this.type === '午餐') this.type = '下午茶'
      else if (this.type === '下午茶') this.type = '晚餐'
      else if (this.type === '晚餐') this.type = '夜宵'
      else if (this.type === '夜宵') this.type = '早餐'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.what-to-eat {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: hidden;
  overflow: hidden;
  background: url(./assets/imgs/bg.jpg) center center;
  .title {
    font-size: 28px;
    font-weight: 500;
    margin-top: 55%;
    text-align: center;
    .food-name {
      font-weight: 700;
    }
  }
  .el-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    width: 180px;
    height: 60px;
    border-radius: 35px;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
}
</style>
