import Login from '../pages/Login'
// import Content from '../pages/Content'
// import Home from '../pages/Content/Home'
// import Table from '../pages/Content/Table'

const routes = [
	// {
	// 	path: '/',
	// 	component: Home,
	// 	exact: true
    // },
    {
		path: '/login',
		component: Login
	},
	// {
	// 	path: '/content',
    //     component: Content,
    //     children:[
    //         {
    //             path:'/content/home',
    //             component:Home
    //         },
    //         {
    //             path:'/content/table',
    //             component:Table
    //         }
    //     ]
	// }
]

export default routes