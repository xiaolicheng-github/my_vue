const demo = import('../../page/part1/demo')
const routes = [
	{
		path: '/part1/demo',
		name: 'part1Demo',
		meta: { title: 'demo', father: 'part1' },
		component: demo
	}
]
export default routes