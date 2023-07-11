import mainpulateContact from "./mainpulate-contact";

export default mainpulateContact.extend({
  actions: {
    create() {
      this.store
        .createRecord("contact", this.model)
        .save()
        .then(() => this.replaceRoute("contacts"));
    },
    cancel() {
      this._super(...arguments)
    },
  },
});
