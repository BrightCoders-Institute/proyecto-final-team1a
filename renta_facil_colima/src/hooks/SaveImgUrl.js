import {useState} from 'react';
import firebase from 'firebase/app';
import 'firebase/storage';

const useFirebaseImageUpload = () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [error, setError] = useState(null);

    const uploadImage = async (file, uid) => {
    try {
        const storageRef = firebase.storage().ref();
        const imageRef = storageRef.child(`images/${uid}`);

        const uploadTask = imageRef.put(file);
        uploadTask.on(
        'state_changed',
        snapshot => {
            const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
        },
        error => {
            setError(error);
        },
        async () => {
            const url = await imageRef.getDownloadURL();
            setDownloadUrl(url);
        },
        );
    } catch (error) {
        setError(error);
    }
    };

    return {uploadImage, uploadProgress, downloadUrl, error};
};

export default useFirebaseImageUpload;
