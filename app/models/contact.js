import Model from "@ember-data/model";
import DS from "ember-data";
export default Model.extend({
  name: DS.attr("string"),
  phone: DS.attr("string"),
  email: DS.attr("string"),
  address: DS.attr("string"),
});
