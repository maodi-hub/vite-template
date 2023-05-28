import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { ResultData } from '../interface';
import { ElMessage } from "element-plus";
import { AxiosCanceler } from '../helper/axiosCancel';

import { GlobalStore } from "@/store";

const axiosCancel = new AxiosCanceler()

const config = {
  timeout: 30000,
  baseURL: '/API',
	// 跨域时候允许携带凭证
	// withCredentials: true
}

class HttpReauest {
  service: AxiosInstance;
  constructor (config: AxiosRequestConfig) {
    this.service = axios.create(config)

    this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				
				const { token } = GlobalStore();
				
				axiosCancel.addPending(config)

				return { ...config, headers: { ...config.headers, "access-token": token } }
			},
			(error: AxiosError) => {

				return Promise.reject(error)
			}
		);

		/**
		 * @description 响应拦截器
		 *  服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {

				const { data, config } = response
				
				axiosCancel.removePending(config)

				return data;
			},
			async (error: AxiosError<{msg: string}>) => {
				
				console.log(error, 'error');

				return Promise.reject(error)
			}
		)
  }

  get<T>(url: string, params?: Record<string, unknown>, _object: AxiosRequestConfig = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object })
	}
  post<T>(url: string, params?: Record<string, unknown>, _object: AxiosRequestConfig = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object)
	}
	put<T>(url: string, params?: Record<string, unknown>, _object: AxiosRequestConfig = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: Record<string, unknown>, _object: AxiosRequestConfig = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new HttpReauest(config)