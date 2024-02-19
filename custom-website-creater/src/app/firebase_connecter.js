import { initializeApp } from 'firebase/app';
import {app} from './firebase_config';
import { getStorage, ref, listAll, getDownloadURL} from "firebase/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase } from "firebase/database";


const storage = getStorage(app);


const database = getDatabase(app);

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



export {database, storage, auth, login, uploadFile, getFileListLinks};