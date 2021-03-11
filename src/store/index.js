import {makeAutoObservable} from 'mobx'

class AppStore {
    constructor(){
        makeAutoObservable(this)
    }
    // 状态
    // 导航栏
    // collapsed=false;
  

    // 修改
    // toggleCollapsed(){
    //     this.collapsed=!this.collapsed
    // }
    // 计算
    get sum(){
        // return this.n+this.m
    }
}
// new完以后得到一个数据对象
let store=new AppStore();
export default store;