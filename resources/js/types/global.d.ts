declare global {
    interface Window {
        axios: import('axios').AxiosInstance;
    }
}

export {};
