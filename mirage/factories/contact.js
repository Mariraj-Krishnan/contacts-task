import { Factory } from "miragejs";

export default Factory.extend({
  name(i) {
    return "person " + (i + 1);
  },
  phone: "1234567890",
  email: "abc@def.com",
  address(i) {
    i++;
    return `${i}, North street, Some city - ${i}${i}${i}${i}`;
  },
});
