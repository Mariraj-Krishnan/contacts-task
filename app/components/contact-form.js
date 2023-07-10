import Component from "@ember/component";
import _ from "lodash";
export default Component.extend({
  classNames: "form-container",

  init() {
    this._super(...arguments);
    this.set("errors", {});
  },

  didReceiveAttrs() {
    this.set("initialData", { ...this.data });
  },

  inputFormats: [
    {
      key: "name",
      label: "Name",
      pattern: /\w{5,}/,
      type: "text",
      keyForError: "nameError",
    },
    {
      key: "phone",
      label: "Phone",
      pattern: /\d{10}/,
      type: "phone",
      keyForError: "phoneError",
    },
    {
      key: "email",
      label: "Email",
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      type: "email",
      keyForError: "emailError",
    },
    {
      key: "address",
      label: "Address",
      pattern: /\w{5,}/,
      type: "text",
      keyForError: "addressError",
    },
  ],
  validate() {
    return this.inputFormats.reduce(
      (valid, { key, pattern, label, keyForError }) => {
        if (!this.data[key]) {
          this.set(`errors.${keyForError}`, `${label} is required`);
          return false;
        }
        if (!this.data[key].match(pattern)) {
          this.set(`errors.${keyForError}`, `Invalid ${label.toLowerCase()}`);
          return false;
        }
        return valid && true;
      },
      true
    );
  },

  hasChange() {
    const change = !_.isEqual(this.data, this.initialData);
    if (!change) {
      this.set("errors.noChange", "No modifications found!");
    }
    return change;
  },

  actions: {
    submit() {
      if (this.validate() && this.hasChange()) {
        this.onSubmit();
      }
    },
    cancel() {
      this.onCancel();
    },
  },
});
