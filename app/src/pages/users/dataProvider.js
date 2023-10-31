import jsonServerProvider from "ra-data-json-server";

const URL = "https://jsonplaceholder.typicode.com/users/2";
export const dataProvider = jsonServerProvider(URL);