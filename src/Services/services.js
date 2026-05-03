import { CONFIG_API } from "../config";
import { ApiClient } from "./API-client";

export async function dataOfsignUp(values) {
  try {
    const options = {
      method: "POST",
      url: `/auth/signup`,
      data: {
        name: values.name,
        email: values.email,
        password: values.password,
        rePassword: values.rePassword,
        phone: values.phone,
      },
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function dataOfLogin(values) {
  try {
    const options = {
      method: "POST",
      url: `/auth/signin`,
      data: {
        email: values.email,
        password: values.password,
      },
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function verifyToken() {
  try {
    const options = {
      method: "GET",
      url: `/auth/verifyToken`,
    };

    const response = await ApiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
