import { defineComponent, onMounted} from 'vue'
import './demo.scss'
export default defineComponent({
  name: 'Demo',
  setup() {
    const canvasDemo1 = () => {
      /* eslint-disable */
      const canvas:any = document.getElementById('part1-demo-canvas1')
      if(canvas.getContext) {
        const ctx = canvas.getContext('2d')

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
    const canvasDemo2 = () => {
      const canvas:any = document.getElementById('part1-demo-canvas2')
      if(canvas.getContext) {
        const ctx = canvas.getContext('2d')
        // 圆的组成： 圆心（x,y） 
        // 半径 开始角度 结束角度 顺时针 逆时针
        ctx.beginPath()
        ctx.strokeStyle = 'orange'
        // lineWidth 线条的粗细
        ctx.lineWidth = 5
        // arc( x, y , 半径， 起始角度， 结束角度， 顺/逆时针)
        ctx.arc(200, 150, 50, 0, Math.PI, false)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 10
        ctx.arc(400, 150, 50, 0, Math.PI, true)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = 'red'
        ctx.lineWidth = 10
        ctx.arc(600, 150, 50, 0, Math.PI, true)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = 'orange'
        ctx.lineWidth = 10
        ctx.arc(600, 150, 50, 0, Math.PI, false)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = 'orange'
        ctx.lineWidth = 10
        ctx.arc(800, 150, 50, 0, 2 * Math.PI, false)
        ctx.stroke()
      }
    }
    const canvasDemo3 = () => {
      const canvas:any = document.getElementById('part1-demo-canvas3')
      if(canvas.getContext) {
        const ctx = canvas.getContext('2d')
        // 圆的组成： 圆心（x,y） 
        // 半径 开始角度 结束角度 顺时针 逆时针
        ctx.beginPath()
        ctx.strokeStyle = 'orange'
        ctx.lineWidth = 5
        ctx.arc(400, 75, 50, 0, 2*Math.PI, false)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(400, 85, 25, 0, Math.PI, false)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(425, 60, 5, 0, 2*Math.PI, false)
        ctx.stroke()
        ctx.beginPath()
        ctx.arc(375, 60, 5, 0, 2*Math.PI, false)
        ctx.stroke()
      }
    }
    onMounted(() => {
      canvasDemo1()
      canvasDemo2()
      canvasDemo3()
    })
    return () => (
      <div class="part1-demo">
        <div>绘制一个三角形及一个简易的折线</div>
        <canvas id="part1-demo-canvas1" width="800" height="150"></canvas>
        <div>绘制一个圆</div>
        <canvas id="part1-demo-canvas2" width="1000" height="300"></canvas>
        <div>绘制一个笑脸</div>
        <canvas id="part1-demo-canvas3" width="1000" height="150"></canvas>
      </div>
    )
  }
})