<template>
    <div class="app-nav">
        <router-link active-class="active" :to = "nav.path" v-for = "nav in navs" :key = "nav.id">
            <i :class="'fa fa-' + nav.icon"></i>
            <span>{{nav.title}}</span>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'app-nav',
    data () {
        return {
            navs: [
                { id: 1, title: '首页', icon: 'home', path:'/home'},
                { id: 2, title: '分类照片', icon: 'th-large', path: '/Classify'},
                { id: 3, title: '购物车', icon: 'shopping-cart',path: '/Cart'},
                { id: 4, title: '我的', icon: 'user-circle-o', path: '/Mine'}
            ]
        }
    }
}
</script>

<style lang="scss">
@import '../../stylesheets/_base.scss';
    .app-nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        background: #fff;
        border-top: 1px solid #e4e2e2;
        display: flex;
        padding: 0.05rem 0px;
        i {
            font-size: 0.22rem;
            // color: #ccc;
        }
    
        a {
        flex-grow: 1;
        height: 100%;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: space-around;
        color: #999;
            &.active {
                color: $base-color;
            }
        }
    }
</style>
