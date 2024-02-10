import { initializeApp } from 'firebase/app';
import {firebaseConfig} from './firebase_config';
import { getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

const auth = getAuth(app);

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

function uploadFile(file) {
    const storageRef = ref(storage, file.name);
    return uploadBytes(storageRef, file);
}

function getFileListLinks() {
    const listRef = ref(storage, '/');
    return listAll(listRef).then((res) => {
        return Promise.all(
            res.items.map((itemRef) => {
                return getDownloadURL(itemRef);
            })
        );
    })
}


export {storage, auth, login, uploadFile, getFileListLinks};