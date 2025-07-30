import axiosInstance from '@/utils/axiosInstance';
import { AxiosResponse } from 'axios';

// Generic type for a standardized API response
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  // Add any other common fields from your API response
}

class ApiClient {
  private static instance: ApiClient;

  private constructor() {}

  public static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  async get<T>(url: string, params?: object): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(url, { params });
    return response.data;
  }

  async post<T>(url: string, data: object): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.post(url, data);
    return response.data;
  }

  async put<T>(url: string, data: object): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.put(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<ApiResponse<T>> {
    const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.delete(url);
    return response.data;
  }
}

const apiClient = ApiClient.getInstance();
export default apiClient;
