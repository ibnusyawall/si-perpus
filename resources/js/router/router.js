import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,

    routes: [
        {
            path: "/admin",
            component: () => import("./../layouts/full-layout/FullLayout"),
            meta: { requireAuth: true },
            children: [
                {
                    name: "admin-dashboard",
                    path: "/admin",
                    component: () => import("./../views/Admin/Dashboard"),
                },
                {
                    name: "buku-list",
                    path: "/admin/buku",
                    component: () => import("./../views/Buku/Dashboard"),
                },
                {
                    name: "buku-jenis",
                    path: "/admin/jenis-buku",
                    component: () => import("./../views/JenisBuku/Dashboard"),
                },
                {
                    name: "kelas-list",
                    path: "/admin/kelas",
                    component: () => import("./../views/Kelas/Dashboard"),
                },
                {
                    name: "peminjam-list",
                    path: "/admin/peminjam",
                    component: () => import("./../views/Peminjam/Dashboard"),
                },
            ]
        },

        {
            name: 'Login',
            path: '/login',
            component: () => import("./../views/Auth/Login")
        },

    ],
});

router.beforeEach(async (to, from, next) => {
    var token = localStorage.getItem('token')
    var user = JSON.parse(localStorage.getItem('user'))
    console.log('user', user)

    try {
        var checkLogin = await check()
        var isAuth = to.matched.some(record => record.meta.requireAuth)

        var cek = !!checkLogin
        if (isAuth && !cek) {
            next({
                name: 'Login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
        next()
    } catch (e) {
        console.log(e)
    }
})

function check() {
    return new Promise(resolve => {
        axios.get('/api/user')
            .then(res => {
                var user = JSON.stringify(res.data)
                localStorage.setItem('user', user)
                console.log(res?.data)
                resolve(true)
            }).catch(e => {
                console.log(e)
                resolve(false)
            })
    })
}

export default router;
