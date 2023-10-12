import { FirebaseApp, FirebaseError, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth, getAuth, User } from "firebase/auth";
import { Firestore, addDoc, collection, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { v4 } from 'uuid'


export const firebaseConfig = {
    // apiKey: process.env.FIREBASE_APIKEY ?? "",
    // authDomain: process.env.FIREBASE_AUTHDOMAIN ?? "",
    // projectId: process.env.FIREBASE_PROJECTID ?? "",
    // storageBucket: process.env.FIREBASE_STORAGEBUCKET ?? "",
    // messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID ?? "",
    // appId: process.env.FIREBASE_APPID ?? "",
    // measurementId: process.env.FIREBASE_MEASUREMENTID ?? "",
    
    apiKey: process.env.FIREBASE_APIKEY ?? "AIzaSyC-LZQ_-f43LxYyWheEjD9Vf2tMngkAisU",
    authDomain: process.env.FIREBASE_AUTHDOMAIN ?? "verifik-b217c.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECTID ?? "verifik-b217c",
    storageBucket: process.env.FIREBASE_STORAGEBUCKET ?? "verifik-b217c.appspot.com",
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID ?? "169324462723",
    appId: process.env.FIREBASE_APPID ?? "1:169324462723:web:6f96578e28812b65c3d1b6",
    measurementId: process.env.FIREBASE_MEASUREMENTID ?? "G-ZSTEBDWSVT",
};
console.log("process.env.DB_HOST:::>", process.env.FIREBASE_APIKEY)

export const app: FirebaseApp = initializeApp(firebaseConfig);
// export const analytics: Analytics = getAnalytics(app);
export const auth: Auth = getAuth(app);
export const currentUser: User | null = auth?.currentUser
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

export const uploadImage = async (fileRef: any): Promise<string | undefined | null | FirebaseError> => {
    try {
        const file = fileRef.current?.files?.[0] ?? new Blob();
        const fileName = file?.name;
        const imgRef = ref(storage, `scaner/${v4() + fileName}`);
        const imgUpload = uploadBytesResumable(imgRef, file);

        if (!file) {
            console.error('No file selected');
            return null; // Return null instead of void
        }

        const url = await new Promise<string>((resolve, reject) => {
            imgUpload.on("state_changed", ({ state }: { state: any }) => {
                switch (state) {
                    case "paused":
                        console.log("Upload is paused");
                        break;
                    case "running":
                        console.log("Upload is running");
                        break;
                    default:
                        break;
                }
            }, (err: any) => {
                reject(err);
            }, async () => {
                try {
                    console.log('entro aqui')
                    const url = await getDownloadURL(imgUpload.snapshot.ref);
                    resolve(url);
                } catch (err) {
                    reject(err);
                }
            });
        });
        console.log(url)
        return url;
    } catch (error) {
        return error as FirebaseError
    }
}


export const saveDataToFirestore = async (data: {
    img: string;
    last_name: string;
    first_name: string;
    documentType: string;
    validationMethod: string;
    client: string;
    documentNumber: string;
}) => {
    console.log('data::>', data)
    try {
        const scanCollection = collection(db, "scan");
        const docRef = await addDoc(scanCollection, data);
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
    } catch (error) {
        console.error("Error adding document: ", error);
        throw error;
    }
};