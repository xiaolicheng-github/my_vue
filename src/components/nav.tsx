import { defineComponent, ref, computed } from 'vue'
import { Layout,
	Menu,
	Breadcrumb
} from 'ant-design-vue'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
import {
	UserOutlined
} from '@ant-design/icons-vue'
import { nav } from '../router'
import { useRouter, RouterView, useRoute } from 'vue-router'
export default defineComponent({
  name: 'Nav',
	setup() {
		const collapsed = ref(false)
    const navList = Object.keys(nav).map(item => {
      return {
        name: item,
        routes: nav[item]
      }
    })
    const selectedKeys= ref<string[]>([navList[0].name])
    const router = useRouter()
    const route = useRoute()
    const menuClick = (item:any) => {
      router.push({
        path: item.path
      })
    }
    const navCrumbs = computed(() => {
      const father: any = route.meta.father
      const curNav = route.meta.title
      return [
        father, curNav
      ]
    })
		return () => (
			<Layout style={{ minHeight: '100vh' }}>
        <Sider v-model={[collapsed.value, 'collapsed']} collapsible>
          <div class="logo" />
          <Menu theme="dark" v-model={[selectedKeys.value,'selectedKeys']} mode="inline">
            {
              navList.map(item => {
                return <SubMenu key={item.name} title={
                  <span>
                    <UserOutlined />
                    <span>{item.name}</span>
                  </span>
                }>
                  {item.routes.map(nav => {
                    return <Menu.Item key={nav.name}>
                      <div onClick={() =>menuClick(nav)}>{nav.meta.title}</div>
                    </Menu.Item>
                  })}
                </SubMenu>
              })
            }
          </Menu>
        </Sider>
        <Layout class="site-layout">
          <Header class="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                navCrumbs.value.map(item => (
                  <Breadcrumb.Item>{item}</Breadcrumb.Item>
                ))
              }
            </Breadcrumb>
            <div class="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <RouterView></RouterView>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
		)
  }
})