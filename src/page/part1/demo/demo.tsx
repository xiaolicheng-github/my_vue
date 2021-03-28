import { defineComponent} from 'vue'
import './demo.scss'
export default defineComponent({
  name: 'Demo',
  setup() {
    return () => (
      <div class="part1-demo">
        hello
      </div>
    )
  }
})