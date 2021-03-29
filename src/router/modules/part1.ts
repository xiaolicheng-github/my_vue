const demo = import('../../page/part1/demo/demo')
const demo2 = import('../../page/part1/demo2/demo2')
const routes = [
	{
		path: '/part1/demo',
		name: 'part1Demo',
		meta: { title: '形状', father: 'part1' },
		component: demo
	},
	{
		path: '/part1/demo2',
		name: 'part1Demo2',
		meta: { title: '渐变', father: 'part1' },
		component: demo2
	}
]
export default routes