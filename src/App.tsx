import { defineComponent} from 'vue'
import Nav from './components/nav'
export default defineComponent({
  setup() {
    return () => (
      <>
      <div>
        <Nav></Nav>
        vue3
      </div>
      </>
    )
  }
})