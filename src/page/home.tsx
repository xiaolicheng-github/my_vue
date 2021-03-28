import { defineComponent} from 'vue'
import Nav from '../components/nav'
export default defineComponent({
  name: 'Home',
  setup() {
    return () => (
      <Nav></Nav>
    )
  }
})