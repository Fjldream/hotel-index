<template>
    <div class="">
        <!-- 头部开始 -->
        <div class="header">
            <div class="cen-avatar">
                <img v-if="person.avatar" :src="person.avatar" alt="">
                <router-link v-else to="/login" ><img src="http://localhost:81/hotel-admin/public/static/avatar.png" alt="默认"></router-link>
            </div>
            <div class="uname">
                <span v-if="person.nickname">{{person.nickname}}</span>
                <router-link to="/login" v-else v-model="usernameshow">请登录</router-link>
            </div>
            <div class="vipcenter">
                <div class="viplogo float-left">
                    <img :src="icon.viplogo">
                </div>
                <span class="viptitle float-left">会员中心</span>
                <router-link to="/" class="vipname float-right">
                    <span>五品小主</span>
                    <span class="jump-to top-jump-to"><i class="iconfont icon-fanhui"></i></span>
                </router-link>
            </div>
            <div class="info">
                <router-link to="/">
                    <i class="iconfont icon-pinglun"></i>
                </router-link>
            </div>
        </div>
        <!-- 我的订单开始 -->
        <div class="order">
            <div class="ordertitle">
                <span>我的订单</span>
            </div>
            <div class="line"></div>
            <div class="view clearfix">
                <span class="jump-to top-jump-to"><i class="iconfont icon-fanhui"></i></span>
                <span>查看全部订单</span>
            </div>
            <div class="ordermenu">
                <ul>
                    <li>
                        <img :src="icon.done" alt="">
                        <div class="orderbtn">
                            <span>已完成</span>
                        </div>
                    </li>
                    <li>
                        <img :src="icon.pay" alt="">
                        <div class="orderbtn">
                            <span>待付款</span>
                        </div>
                    </li>
                    <li>
                        <img :src="icon.live" alt="">
                        <div class="orderbtn">
                            <span>待入住</span>
                        </div>
                    </li>
                    <li>
                        <img :src="icon.refund" alt="">
                        <div class="orderbtn">
                            <span>退款</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 菜单页开始 -->
        <div class="menu">
            <ul>
                <li>
                    <span class="prefix"></span>
                    <span>红包</span>
                    <span class="jump-to bottom-jump-to"><i class="iconfont icon-youjiantou"></i></span>
                </li>
                <li>
                    <span class="prefix"></span>
                    <span>设置</span>
                    <span class="jump-to bottom-jump-to"><i class="iconfont icon-youjiantou"></i></span>
                </li>
                <router-link to="/collection" tag="li">
                    <span class="prefix"></span>
                    <span>收藏管理</span>
                    <span class="jump-to bottom-jump-to"><i class="iconfont icon-youjiantou"></i></span>
                </router-link>
                <li>
                    <span class="prefix"></span>
                    <span>积分商城</span>
                    <span class="jump-to bottom-jump-to"><i class="iconfont icon-youjiantou"></i></span>
                </li>
                <li>
                    <span class="prefix"></span>
                    <span>帮助与反馈</span>
                    <span class="jump-to bottom-jump-to"><i class="iconfont icon-youjiantou"></i></span>
                </li>
            </ul>
        </div>
        <!-- 提交按钮开始 -->
        <div class="btn">
            <span @click="exitLogin">退出登录</span>
        </div>
        <div class="footer">
            <tabbar :index="4"></tabbar>
        </div>
    </div>
</template>

<script>

// 图标
import viplogo from '@/assets/center/viplogo.png';
import done from '@/assets/center/done.png';
import live from '@/assets/center/live.png';
import pay from '@/assets/center/pay.png';
import refund from '@/assets/center/refund.png';
import {apiPerson} from "../../http/api";
import {IMGURL, SUCCESS} from "../../lib/base";

// 底部导航
import tabbar from "../tabbar/tabbar";

export default {
    name: 'center',
    props: {
    },
    data () {
        return {
            icon: {
                viplogo , done, live, pay, refund
            },
            person:null,
        }
    },
    watch: {},
    computed: {
    },
    methods: {
        initPerson(){
            apiPerson().then(res=>{
                if (res.code===SUCCESS){
                    res.data.avatar = IMGURL + res.data.avatar;
                    this.person = res.data;
                }
            }).catch(error=>{
                console.log(error);
            })
        },
        exitLogin(){
            this.$store.commit('setToken',"");
            this.$store.commit('setCollection',[]);
            this.$router.replace({name:'Login'});
        }
    },
    mounted() {
        this.initPerson();
    },
    components: {
        // NavBar: navbar
        tabbar
    }
}
</script>
<style src="../../style/center.css" scoped>
</style>