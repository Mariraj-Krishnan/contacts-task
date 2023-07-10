import Controller from "@ember/controller";

export default Controller.extend({
  actions: {
    delete(contact_id) {
      this.store
        .peekRecord("contact", contact_id)
        .destroyRecord()
        .then(() => {
          this.replaceRoute("contacts");
        });
    },
  },
});
