import mainpulateContact from "./mainpulate-contact";
export default mainpulateContact.extend({
  actions: {
    update() {
      const contact = this.store.peekRecord("contact", this.model.id);
      contact.setProperties(this.model);
      contact.save().then(() => this.replaceRoute("contacts"));
    },
    cancel() {
      this._super(...arguments)
    },
  },
});
