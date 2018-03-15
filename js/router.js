const Foo = { template: '<div>首页</div>' };
const Bar = { template: `<div>
            <table class="table table-bordered">
            <tbody>
    <tr>
        <td>商品表号</td>
        <td>商品名称</td>
        <td>商品价格</td>
        <td>商品数量</td>
        <td>商品单价</td>
        <td>批量</td>
    </tr>
    <tr v-for="item in goods">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.pirce}}</td>
        <td>
            <p @click="add(item)">+</p>
            <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe" style="width: 100px;text-align: center" v-model="item.num" @keyup="jian(item)">
            <p @click="jian(item)">-</p>
        </td>
        <td>{{item.pirce*item.num}}</td>
        <td>
            <button type="button" class="btn btn-danger" @click="del(item.id)">删除</button>
                    <!--<router-link to="/foo">添加</router-link>-->
            <a href="cart.html">购物车</a>
        </td>
    </tr>
    <tr>
        <td>商品总量</td>
        <td>{{nums}}</td>
        <td>商品总价</td>
        <td>{{pirces}}</td>
    </tr>
    </tbody>
</table>
    <div v-show="this.goods.length<1" style="color: red;font-size: 24px;">已经没有商品了</div>
    </div>` ,
    data(){
        return{
            goods:[
                {id:1,name:"衣服",pirce:500,num:5},
                {id:2,name:"电脑",pirce:200,num:9},
                {id:3,name:"裤子",pirce:400,num:4},
                {id:4,name:"手机",pirce:1500,num:1}
            ]
        }
    },
    methods:{
        del(id){
            for(i=0; i<this.goods.length;i++){
                if(this.goods[i].id==id){
                    this.goods.splice(i,1)
                }
            }
        },
        add(item){
            item.num=parseFloat(item.num+1)
        },
        jian(item){
            item.num=parseFloat(item.num-1);
            if (item.num<2){
                item.num=1;
                alert("不能小于1")
            }
        }
    },
    computed:{
        nums(){
            var num=0;
            for(var i=0;i<this.goods.length;i++){
                num+=parseFloat(this.goods[i].num);
            }
            return num;
        },
        pirces(){
            var num=0;
            for(var i=0;i<this.goods.length;i++){
                num+=parseFloat(this.goods[i].num*this.goods[i].pirce);
            }
            return num
        }
    },

};
new Vue({
    el:"#root",
    // router:router
});

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar }
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
});

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
    router
}).$mount('#app');

