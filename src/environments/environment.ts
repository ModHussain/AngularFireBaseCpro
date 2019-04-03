// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: "AIzaSyD0NBVgS5LTQPvUsC4jEk-dQKW6EYUMlP8",
    authDomain: "hussainfirechat.firebaseapp.com",
    databaseURL: "https://hussainfirechat.firebaseio.com",
    projectId: "hussainfirechat",
    storageBucket: "hussainfirechat.appspot.com",
    messagingSenderId: "821912234538"
  }
};
