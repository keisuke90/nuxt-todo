import firebase from "firebase";

const config = {
  projectId: "FIREBASE_PROJECT_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
