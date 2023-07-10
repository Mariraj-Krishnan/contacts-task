import Route from "@ember/routing/route";

export default Route.extend({
  model({ contact_id }) {
    return this.store
      .findRecord("contact", contact_id)
      .then((data) => data.toJSON({ includeId: true }));
  },
});
