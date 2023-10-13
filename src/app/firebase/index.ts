'use client'
import { FirebaseApp, FirebaseError, initializeApp } from "firebase/app";
import { Auth, getAuth, User } from "firebase/auth";
import { Firestore, addDoc, collection, getDocs, getFirestore, query } from "firebase/firestore";
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { v4 } from 'uuid'


export const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY ?? "",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN ?? "",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID ?? "",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET ?? "",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID ?? "",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APPID ?? "",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID ?? "",
};

export const app: FirebaseApp = initializeApp(firebaseConfig);
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

export const getDataFromFirestore = async () => {
    try {
        const scanCollection = collection(db, 'scan');
        const q = query(scanCollection);

        const querySnapshot = await getDocs(q);
        const data: any = [];

        querySnapshot.forEach((doc) => {
            data.push({
                id: doc.id,
                ...doc.data(),
            });
        });

        return data;
    } catch (error) {
        console.error('Error fetching documents: ', error);
        throw error;
    }
};