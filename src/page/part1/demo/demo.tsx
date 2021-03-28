import { defineComponent, onMounted} from 'vue'
import './demo.scss'
export default defineComponent({
  name: 'Demo',
  setup() {
    const canvasDemo1 = () => {
      /* eslint-disable */
      const canvas1:any = document.getElementById('part1-demo-canvas1')
      if(canvas1.getContext) {
        const ctx = canvas1.getContext('2d')

        // 图形的基本元素就就是路径
        // 1 创建起始路径
        // 2 使用画图命令画出路径
        // 3 把路径闭合
        // 4 通过描边或填充绘制图形

        // 绘制一个三角形
        // 创建起始路径
        ctx.beginPath()
        // moveTo: 从此开始 x 70 y 50
        ctx.moveTo(70, 50)
        // lineTo 去往此处
        ctx.lineTo(100, 75)
        ctx.lineTo(100, 25)
        // 填充默认颜色
        // ctx.fill()
        // 闭合路径
        ctx.closePath()
        // 默认颜色描边
        ctx.stroke()

        // 简单的折线图
        ctx.beginPath()
        ctx.moveTo(150, 100)
        ctx.lineTo(200, 50)
        ctx.lineTo(250, 75)
        ctx.lineTo(300, 40)
        ctx.stroke()
      }
    }
    onMounted(() => {
      canvasDemo1()
    })
    return () => (
      <div class="part1-demo">
        <div>绘制一个三角形及一个简易的折线</div>
        <canvas id="part1-demo-canvas1" width="800" height="300"></canvas>
      </div>
    )
  }
})