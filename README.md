# react-native-network
## react-native 网络封装库
### 支持 Android、iOS 设备平台

``` javascript
/***
 * 获取网络连接状态
 * (Android设备)
 * @param callback
 */
const getNetworkState = (callback) => {
    NetInfo.isConnected.fetch().done(
        (isConnected) => {
            callback(isConnected);
        }
    );
}

/**
 * 网络是否为计费: 移动网络 true , WiFi: false
 * (Android设备)
 * @param {*} callback 
 */
const isConnectionExpensive = (callback) => {
    NetInfo.isConnectionExpensive().then((isConnectionExpensive) => {
        callback(isConnectionExpensive)
    }).catch(error => {
        console.error(error);
    })
}

iOS相关：
/**
 * 注册网络监听，获取网络连接状态
 * (iOS设备)
 * true: 连接， false: 离线
 * @param {*}  callback
 */
const addNetListener = (callback) => {
    NetInfo.isConnected.addEventListener(TAG_NETWORK_CHANGE, callback);
}

/**
 * 移除网络监听
 * (iOS设备)
 * @param {*} callback 
 */
const removeNetListener = (callback) => {
    NetInfo.isConnected.removeEventListener(TAG_NETWORK_CHANGE, callback);
}


三、使用

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
