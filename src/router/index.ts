import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
const Home = () => import('../page/home')
import part1 from './modules/part1'
const routes = [
	{
		path: '/',
		redirect: '/index'
	},
	{
		path: '/index',
		name: 'Index',
		meta: { title: '首页' },
		component: Home,
		children: [...part1]
	}
]
const router = createRouter({
	history: createWebHashHistory(),
	routes
})
/* eslint-disable @typescript-eslint/no-explicit-any */
interface Ipart {
	path: string,
	name: string,
	meta: any
}
/* eslint-disable @typescript-eslint/no-explicit-any */
interface Inav {
	[key: string]: Array<Ipart>
}
const nav: Inav = {
	part1: [...part1]
}
export { nav }
export default router