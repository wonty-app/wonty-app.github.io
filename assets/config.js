/*
 * THE configuration of the Wonty landing site. Edit the values here and redeploy; no other file
 * needs to change. Plain script (no modules, no build step): it sets window.WONTY_CONFIG.
 *
 * See site/README.md for how each value is used.
 */
window.WONTY_CONFIG = {
  /*
   * Numeric App Store id of Wonty ("1234567890"), from App Store Connect > App Information >
   * Apple ID. '' until the app is on the App Store: then "Get Wonty" goes to TESTFLIGHT_URL and
   * the Smart App Banner is left out.
   */
  APP_STORE_ID: '',

  /*
   * Public TestFlight invitation ("https://testflight.apple.com/join/AbCd1234") for the beta.
   * Used while APP_STORE_ID is ''. '' = no public beta: "Get Wonty" still copies the invitation and
   * says the app is not in the App Store yet.
   */
  TESTFLIGHT_URL: '',

  /* The app's custom URL scheme (app.json `expo.scheme`): "Open in Wonty" is wonty://e/<token>. */
  SCHEME: 'wonty',

  /*
   * Link base hint: the app's link base (EXPO_PUBLIC_LINK_BASE_URL, default
   * https://wonty-app.github.io; no trailing slash). The invitation the page copies for the app
   * must be on a host the app knows: opened elsewhere (a preview, a mirror), the copied link is
   * rebuilt on this base. Keep it equal to the app's value. If it has a path (a project site),
   * list that path in KNOWN_BASES in the first script of 404.html too.
   */
  LINK_BASE_URL: 'https://wonty-app.github.io',

  /*
   * Informational mirror of the contact address: no site script reads it. The privacy and support
   * pages take the address from legal/identity.json (contactEmail) when
   * scripts/build-legal-pages.mjs generates them. Keep it equal to identity.json and to
   * src/lib/support.ts (a test checks both).
   */
  SUPPORT_EMAIL: 'krasovskyi.yevhenii@gmail.com',
};
