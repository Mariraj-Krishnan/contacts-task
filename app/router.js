import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route("contacts", function () {
    this.route("contact", { path: "/:contact_id" });
  });
  this.route("edit-contact", { path: "/edit-contact/:contact_id" });
  this.route("create-contact");
  this.route("not-found", { path: "*" });
});
