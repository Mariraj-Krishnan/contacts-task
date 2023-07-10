import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    update() {
      const contact = this.store.peekRecord("contact", this.model.id);
      contact.setProperties(this.model);
      contact.save().then(() => this.replaceRoute("contacts"));
    },
    cancel() {
      this.transitionToRoute("contacts");
    },
  },
});
