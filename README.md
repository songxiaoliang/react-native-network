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

(3)获取当前设备连接的网络类型，ex.移动网络、Wifi等
NetWorkUtil.getNetType((reach) => {
  console.log(reach)
})
```
