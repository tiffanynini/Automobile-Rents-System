// react
import React, {Component,createContext,useContext,useState} from 'react'
import {Observer} from 'mobx-react'
import {Context} from '../App'
import 'antd/dist/antd.css';
import '../App.css'

// antd
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4', 'sub5', 'sub6','sub7'];

function Navigate (){
    let data=useContext(Context);
    const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
    return (
        <Observer>
            {
                ()=>(
                    <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256,height:'100%',backgroundColor:'#305CCC',color:'#fff' }}>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="订单管理" popupClassName="childNav">
                      <Menu.Item key="1">全部订单</Menu.Item>
                      <Menu.Item key="2">待取车</Menu.Item>
                      <Menu.Item key="3">待还车</Menu.Item>
                      <Menu.Item key="4">企业订单</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="车辆信息管理">
                      <Menu.Item key="5">车辆管理</Menu.Item>
                      <Menu.Item key="6">车辆调度</Menu.Item>
                      <Menu.Item key="7">车型管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<SettingOutlined />} title="车辆服务管理">
                      <Menu.Item key="8">保险到期车辆</Menu.Item>
                      <Menu.Item key="9">待年检车辆</Menu.Item>
                      <Menu.Item key="10">保养车辆</Menu.Item>
                      <Menu.Item key="11">提醒设置</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" icon={<SettingOutlined />} title="门店管理">
                      <Menu.Item key="12">门店管理</Menu.Item>
                      <Menu.Item key="13">员工管理</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub5" icon={<SettingOutlined />} title="客户管理">
                      <Menu.Item key="9">个人客户</Menu.Item>
                      <Menu.Item key="10">企业客户</Menu.Item>
                      <Menu.Item key="11">黑名单</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub6" icon={<SettingOutlined />} title="统计分析">
                      <Menu.Item key="12">用户统计</Menu.Item>
                      <Menu.Item key="13">订单统计</Menu.Item>
                      <Menu.Item key="14">车辆统计</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub7" icon={<SettingOutlined />} title="系统设置">
                    </SubMenu>
                  </Menu>
                )
            }
        </Observer>
        
    )
}
export default Navigate