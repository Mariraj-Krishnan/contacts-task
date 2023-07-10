import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    create() {
      this.store
        .createRecord("contact", this.model)
        .save()
        .then(() => this.replaceRoute("contacts"));
    },
    cancel() {
      this.transitionToRoute("contacts");
    },
  },
});
