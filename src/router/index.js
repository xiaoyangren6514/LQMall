import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('views/home/Home')
const Category = () => import("views/category/Category.vue")
const ShoppingCart = () => import("views/shoppingcart/ShoppingCart.vue")
const Profile = () => import("views/profile/Profile.vue")
const Detail = () => import("views/detail/Detail.vue")

const routes = [
    {
        path: '',
        redirect: "/home"
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: ShoppingCart
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/detail/:id',
        component: Detail
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
});