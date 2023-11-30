import moment from "moment";

//переводит число в строку формата "01:25"
export default (seconds: number) => {
  return moment.utc(seconds * 1000).format("mm:ss");
};
