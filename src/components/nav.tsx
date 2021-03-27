import { defineComponent, ref } from 'vue'
import { Layout,
	Menu,
	Breadcrumb
} from 'ant-design-vue'
const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu
import {
  PieChartOutlined,
  DesktopOutlined,
	UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue'
export default defineComponent({
	setup() {
		const collapsed = ref<Boolean>(false)
		const selectedKeys= ref<string[]>(['1'])
		return () => (
			<Layout style={{ minHeight: '100vh' }}>
        <Sider v-model={[collapsed, 'collapsed']} collapsible>
          <div class="logo" />
          <Menu theme="dark" v-model={[selectedKeys,'selectedKeys']} mode="inline">
            <Menu.Item key={'1'}>
							<PieChartOutlined />
							<span>Option 1</span>
            </Menu.Item>
            <Menu.Item key={'2'}>
							<DesktopOutlined />
          		<span>Option 2</span>
            </Menu.Item>
            <SubMenu key="sub1" title={
							<>
							<span>
								<UserOutlined />
								<span>User</span>
							</span>
							</>
						}>
              <Menu.Item key={'3'}>Tom</Menu.Item>
              <Menu.Item key={'4'}>Bill</Menu.Item>
              <Menu.Item key={'5'}>Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={
							<>
							<span>
								<TeamOutlined />
								<span>Team</span>
							</span>
							</>
						}>
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
							<FileOutlined />
          		<span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout class="site-layout">
          <Header class="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div class="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
		)
  }
})