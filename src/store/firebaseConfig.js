import {initializeApp} from 'firebase/app'
import {getDownloadURL, getStorage, ref} from "firebase/storage"


const firebaseConfig = {
    databaseURL: 'https://shoeapp-e4b89-default-rtdb.firebaseio.com',
    storageBucket: "gs://shoeapp-e4b89.appspot.com",

};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

