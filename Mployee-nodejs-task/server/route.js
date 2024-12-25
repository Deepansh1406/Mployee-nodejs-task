//v7 imports

import job from "./api/v1/controllers/job/routes.js";


/**
 *
 *
 * @export
 * @param {any} app
 */

export default function routes(app) {
  app.use("/api/v1/job", job);
  return app;
}

