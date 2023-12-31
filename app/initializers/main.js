import { registerDeprecationHandler } from "@ember/debug";

export function initialize() {
  registerDeprecationHandler((message, options, next) => {
    if (options && options.until && options.until !== "2.0.0") {
      console.log(message, options);
      return;
    } else {
      next(message, options);
    }
  });
}

export default { initialize };
