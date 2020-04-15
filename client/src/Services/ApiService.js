//API call services will come here

import axios from "axios";
import { BASE_URL } from "../Utils/Urls";

export const webService = async (url, type, options) => {
  const baseUrl = BASE_URL;
  const config = {
    headers: { "Access-Control-Allow-Origin": "*" },
  };
  switch (type) {
    case "get":
      return await axios
        .get(`${baseUrl}${url}`,config)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error;
        });
      break;
    case "post":
      return await axios
        .post(`${baseUrl}${url}`, options,config)
        .then((res) => {
          return res;
        })
        .catch((error) => {
          return error;
        });
      break;
    case "put":
      return await axios
        .put(`${baseUrl}${url}`, options,config)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error;
        });
      break;
    case "delete":
      return await axios
        .delete(`${baseUrl}${url}`,config)
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error;
        });
      break;

    default:
      return "type not specified";
  }
};
