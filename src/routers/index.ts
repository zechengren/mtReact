const routes = [
    {path: '/', 
    component: './index',
    routes: [
        {path: '/', redirect: '/pic'},

        {path: '/pic', component: './pic/pic'},
        {path: '/head', component: './head/head'},
        {path: '/joke', component: './joke/joke'},
        {path: '/author', component: './author/author'},

        {component: './notfound/notfound'}
        ]
    }
      
]
export default routes;