import { defineComponent, onMounted} from 'vue'

export default defineComponent({
  name: 'demo2',
  setup() {
    const demo1 = () => {
      const canvas:any = document.getElementById('part1-demo-canvas1')
      if(canvas.getContext) {
        const ctx = canvas.getContext('2d')
        // 线性渐变
        // createLinearGradient(x0, y0, x1, y1)
        // x0
        // 起点的 x 轴坐标。
        // y0
        // 起点的 y 轴坐标。
        // x1
        // 终点的 x 轴坐标。
        // y1
        // 终点的 y 轴坐标。
        const gtadient = ctx.createLinearGradient(0, 0, 800, 150)
        // gtadient.addColorStop(offset, color) 指定的断点到渐变
        // offset
        // 0到1之间的值，
        // color
        // CSS颜色值 <color>。如果颜色值不能被解析为有效的CSS颜色值 <color>，将抛出SYNTAX_ERR错误。
        gtadient.addColorStop(0, 'red')
        gtadient.addColorStop(1, 'blue')
        ctx.fillStyle = gtadient
        ctx.fillRect(0, 0, 800, 150)
      }
    }
    onMounted(() => {
      demo1()
    })
    return () => (
      <div class="part1-demo">
        <div>线性渐变</div>
        <canvas id="part1-demo-canvas1" width="800" height="150"></canvas>
      </div>
    )
  }
})