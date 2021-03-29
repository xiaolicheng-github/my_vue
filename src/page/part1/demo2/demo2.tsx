import { defineComponent, onMounted} from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('haha')
    })
    return () => (
      <div>122</div>
    )
  }
})