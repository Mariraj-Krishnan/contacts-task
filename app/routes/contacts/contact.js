import Route from "@ember/routing/route";

export default Route.extend({
  model({ contact_id }) {
    const contact = this.store.peekRecord("contact", contact_id);
    if (contact === null) {
      this.transitionTo("not-found", "not-found");
    }
    return contact;
  },
});
