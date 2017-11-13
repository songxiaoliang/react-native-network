# react-native-network
### react-native 网络封装库，支持 Android、iOS 设备平台


#### 集成
##### 1.导入文件到工程目录
##### 2.使用

``` javascript
(1)Android网络状态：
NetWork.getNetworkState((isConnected) => {
    if(isConnected) {
        // 连接状态
    } else {
        // 未连接状态
    }
})

(2)网络是否为计费,(Android设备)
NetWork.isConnectionExpensive((isConnectionExpensive) => {
    if(isConnectionExpensive) {
        // 网络计费
    } else {
      // 网络不计费
    } 
})

(3)iOS设备连接状态

// 注册监听
componentWillMount() {
    if(Platform.OS === 'ios') {
        NetWork.addNetListener(NetWork.TAG_NETWORK_CHANGE, (isConnected)=>{
            console.log(isConnected);
        })
    }
}

// 注销监听
componentWillUnmount() {
    if(Platform.OS === 'ios') {
        NetWork.removeNetListener(NetWork.TAG_NETWORK_CHANGE, this._getNetWork);
    }
}

(4)获取当前设备连接的网络类型，ex.移动网络、Wifi等
NetWorkUtil.getNetType((reach) => {
    if(reach === 'none' || reach === 'NONE') {
        console.log('网络未连接');
    } else {
        console.log(reach);
    }
})
```
