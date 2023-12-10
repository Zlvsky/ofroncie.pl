import { FirebaseApp, initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1kyhKyF8iD0KzEWa3n0YIpn5SKzKMrrE",
  authDomain: "ofroncie.firebaseapp.com",
  projectId: "ofroncie",
  storageBucket: "ofroncie.appspot.com",
  messagingSenderId: "365515570764",
  appId: "1:365515570764:web:a5470eeddec821c755bee9",
  measurementId: "G-2N1H4Y8LGQ",
};

export const startCollectingAnalitycs = (app: FirebaseApp) => {
  const analytics = getAnalytics(app);
  logEvent(analytics, "page_view");
  logEvent(analytics, "screen_view");
  logEvent(analytics, "user_engagement");
  logEvent(analytics, "session_start");
  logEvent(analytics, "session_end");
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
startCollectingAnalitycs(app);

const auth = getAuth(app);
auth.useDeviceLanguage();
export { auth };
export default app;
