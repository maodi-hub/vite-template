import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { ResultData } from "../interface";
import { ElMessage } from "element-plus";
import { AxiosCanceler } from "../helper/axiosCancel";

import { useGlobalStore } from "@/store";
import { isFunction } from "@/utils/is";
import { checkCode } from "../helper/checkCode";

const axiosCancel = new AxiosCanceler();

const config = {
  timeout: 30000,
  baseURL: "/API",
  // 跨域时候允许携带凭证
  withCredentials: true,
};

class HttpReauest {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    this.service.interceptors.request.use(
      (config) => {
        // 在请求发送之前，做点什么
        const { token } = useGlobalStore();

        axiosCancel.addPending(config);

        token && isFunction(config.headers.set) && config.headers.set('access-token', token);

        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    /**
     * @description 响应拦截器
     *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
     */
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        // 接收到响应信息之后做点什么
        const { data, config } = response;

        axiosCancel.removePending(config);

        return data;
      },
      async (error: AxiosError<{ msg: string }>) => {
        console.log(error, "error");
        const { response } = error;
        if (error.message.indexOf("timeout") !== -1)
          ElMessage.error("请求超时！请您稍后重试");

        if (error.message.indexOf("Network Error") !== -1)
          ElMessage.error("网络错误！请您稍后重试");

        if (response) ElMessage.error(checkCode(response.status));

        return Promise.reject(error);
      }
    );
  }

  get<T>(
    url: string,
    params?: Record<string, unknown>,
    _object: AxiosRequestConfig = {}
  ): Promise<ResultData<T>> {
    return this.service.get(url, { params, ..._object });
  }
  post<T>(
    url: string,
    params?: Record<string, unknown>,
    _object: AxiosRequestConfig = {}
  ): Promise<ResultData<T>> {
    return this.service.post(url, params, _object);
  }
  put<T>(
    url: string,
    params?: Record<string, unknown>,
    _object: AxiosRequestConfig = {}
  ): Promise<ResultData<T>> {
    return this.service.put(url, params, _object);
  }
  delete<T>(
    url: string,
    params?: Record<string, unknown>,
    _object: AxiosRequestConfig = {}
  ): Promise<ResultData<T>> {
    return this.service.delete(url, { params, ..._object });
  }
}

export default new HttpReauest(config);
