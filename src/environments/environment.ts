// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC336_9dvWWMxP6EcggUPXRkPLWCkEvEO8",
    authDomain: "clientpanelprodng.firebaseapp.com",
    databaseURL: "https://clientpanelprodng.firebaseio.com",
    projectId: "clientpanelprodng",
    storageBucket: "clientpanelprodng.appspot.com",
    messagingSenderId: "395274841998"
  }
};
