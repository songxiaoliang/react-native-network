/**
 * 网络工具类
 * create by song on 2017-06-20
 */

import {
    NetInfo,
    Platform
} from 'react-native';

const NOT_NETWORK = "网络连接不可用，请稍后再试";
const TAG_NETWORK_CHANGE = "change";

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

/**
 * 获取网络连接类型
 * @param {*} callback 
 */
const getNetType = (callback) => {
    this.callback = callback;
    if(Platform.OS === 'ios') {
        NetInfo.addEventListener(TAG_NETWORK_CHANGE, netListener)
    } else {
        NetInfo.fetch().done((reach) => {
            if(reach !== 'UNKNOWN') {
                this.callback(reach);
            }
        })
    }
}

/**
 * 获取iOS网络类型回调
 * @param {*} reach 
 */
const netListener = (reach) => {
    if(reach !== 'unknown') {
        this.callback(reach);
    }
    NetInfo.removeEventListener(TAG_NETWORK_CHANGE, netListener)
}

export default {
    NOT_NETWORK,
    getNetType,
    getNetworkState,
    addNetListener,
    removeNetListener,
    isConnectionExpensive
}

