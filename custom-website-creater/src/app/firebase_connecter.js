import { initializeApp } from 'firebase/app';
import {app} from './firebase_config';
import { getStorage, ref, listAll, getDownloadURL, deleteObject, uploadBytes} from "firebase/storage";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";


const storage = getStorage(app);


const database = getDatabase(app);

const auth = getAuth(app);

function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

var is_logged_in = true;

onAuthStateChanged(auth, (user) => {
    if (user) {
        is_logged_in = true;
    } else {
        is_logged_in = false;
    }
  });

function uploadFile(file) {
    const storageRef = ref(storage, file.name);
    return uploadBytes(storageRef, file);
}

function deleteFile(file) {
    const strRef = ref(storage, file.replace(/\%20/g, " "));
    console.log(strRef);
    return deleteObject(strRef);
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


export {database, storage, auth, login, uploadFile, getFileListLinks, is_logged_in, deleteFile};