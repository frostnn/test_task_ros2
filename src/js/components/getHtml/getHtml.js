import getApiResource from "../../../utils/network";
import { root, URL_API } from "../../../utils/root";

const getHtml = async () => {
  const { [0]: tax } = await getApiResource(URL_API);
  const { text } = tax;
  const taxs = tax.tax;
  console.log(text.split(">"));
  let html;
  taxs.forEach((elem) => {
    html = `<h3>${elem}</h3>`;
    root.insertAdjacentHTML("beforeend", html);
  });
  console.log(tax);
  root.insertAdjacentHTML("beforeend", text);
};

export default getHtml;
