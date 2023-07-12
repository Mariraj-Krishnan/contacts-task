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
  validateAll() {
    return this.inputFormats.reduce((valid, format) => {
      return this.actions.validateField.call(this, format, this.data[format.key]) && valid;
    }, true);
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
      if (this.validateAll() && this.hasChange()) {
        this.onSubmit();
      }
    },
    cancel() {
      this.onCancel();
    },

    validateField({ pattern, label, keyForError }, value) {
      this.set("errors.noChange","");
      if (!value) {
        this.set(`errors.${keyForError}`, `${label} is required`);
        return false;
      } 
       if (!value.match(pattern)) {
        this.set(`errors.${keyForError}`,`Invalid ${label.toLowerCase()}`);
        return false;
      }
        this.set(`errors.${keyForError}`, '');
        return true;
    }
  },
});
