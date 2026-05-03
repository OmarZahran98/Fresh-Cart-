export const CONFIG_API = {
  baseUrl: import.meta.env.VITE_BASE_URL
    ? `${import.meta.env.VITE_BASE_URL}/api/${import.meta.env.VITE_BASE_VERSION}`
    : "https://ecommerce.routemisr.com/api/v1",
};
