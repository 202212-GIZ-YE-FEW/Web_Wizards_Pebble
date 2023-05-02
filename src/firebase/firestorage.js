import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";

import app from "@/firebase/firebase.config";

const useFirebaseStorage = (path) => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [error, setError] = useState(null);
    const storage = getStorage(app);

    const uploadFile = (file) => {
        const storageRef = ref(storage, path + "/" + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // get the percentage of the upload progress
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setUploadProgress(progress);
            },
            (error) => {
                // Handle unsuccessful uploads
                setError(error);
            },
            () => {
                // Handle successful uploads on complete
                if (uploadTask.snapshot) {
                    getDownloadURL(uploadTask.snapshot.ref)
                        .then((url) => {
                            setDownloadUrl(url);
                        })
                        .catch((error) => {
                            console.error("Error getting download URL:", error);
                            setError(error);
                        });
                }
            }
        );
    };

    const deleteFile = async (fileName) => {
        const storageRef = ref(storage, path + "/" + fileName);
        try {
            await deleteObject(storageRef);
            return { success: true };
        } catch (error) {
            console.error("Error deleting file:", error);
            return { success: false, error };
        }
    };

    return { uploadFile, uploadProgress, downloadUrl, deleteFile, error };
};

export default useFirebaseStorage;
