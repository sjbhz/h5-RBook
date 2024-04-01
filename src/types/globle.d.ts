// 声明全局变量、类型

//  在没有import 情况下declare 可以自定义全局类型 值
// declare const axios: AxiosInstance;

//如果有import 要定义全局变量、类型 需要declare global {....} 来声明
import { AxiosInstance, AxiosResponse } from 'axios';
declare global {
  // 声明全局变量、类型、使用方式：plugTool.JLoading()
  type plugTool = {
    JLoading: () => void,
    JHideLoading: () => void,
    JGetShareInfo: (id: string) => void
  }
  type sdDefaults = {
    VServerAPI: string
  }
  type response = {
    code: number,
    data: any,
    message: string | null
  }
  const sdDefaults: sdDefaults
  const axios: AxiosInstance
  const plugTool: plugTool

  // 声明 window 的属性和方法 使用方式：window.plugTool.JLoading()
  interface Window {
    axios: AxiosInstance
    plugTool: plugTool
    sdDefaults: sdDefaults
  }

}