import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth, User } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from 'firebase/storage'

export const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY ?? "",
    authDomain: process.env.FIREBASE_AUTHDOMAIN ?? "",
    projectId: process.env.FIREBASE_PROJECTID ?? "",
    storageBucket: process.env.FIREBASE_STORAGEBUCKET ?? "",
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID ?? "",
    appId: process.env.FIREBASE_APPID ?? "",
    measurementId: process.env.FIREBASE_MEASUREMENTID ?? "",
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
export const analytics: Analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
export const currentUser: User | null = auth?.currentUser
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);