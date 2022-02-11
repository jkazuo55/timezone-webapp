import http from "../http-common";
import {IUtConverterTime} from "../components/UtcConverterForm"

const converter = (data: IUtConverterTime) => {
  return http.post<IUtConverterTime>("/transform-time/json", data);
};

const UtcConverterService = {
  converter,
};
export default UtcConverterService;