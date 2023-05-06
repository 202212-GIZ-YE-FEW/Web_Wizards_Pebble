import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getFirestore,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";

import app from "@/firebase/firebase.config";

// when calling the useFirestore hook, we pass in the collection path as a parameter
// this can be imported in other files liek this: import useFirestore from import useFirestore from "@/lib/useFirestore";
// const { addDocument, documents } = useFirestore("test"); // this is example how we can use the useFirestore hook, we initialize it with the collection name
// you can create other hooks for auth or storage following the same pattern of this file.

const useFirestore = (collectionPath) => {
    const [documents, setDocuments] = useState([]);
    const firestore = getFirestore(app);

    // this is so that if the document is updated, we get the updated version of the data at real time
    useEffect(() => {
        const q = query(collection(firestore, collectionPath));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const fetchedDocuments = [];
            snapshot.forEach((doc) => {
                fetchedDocuments.push({ ...doc.data(), id: doc.id });
            });
            setDocuments(fetchedDocuments);
        });

        return () => {
            unsubscribe();
        };
    }, [firestore, collectionPath]);

    // this is to insert an object to the firestore collection

    const addDocument = async (data) => {
        try {
            const docRef = await addDoc(
                collection(firestore, collectionPath),
                data
            );
            return { success: true, id: docRef.id };
        } catch (error) {
            console.error("Error adding document:", error);
            return { success: false, error };
        }
    };

    // this method is used to update a given document by id and the new data to be used
    const updateDocumentById = async (id, data) => {
        try {
            const docRef = doc(firestore, collectionPath, id);
            await updateDoc(docRef, data);
            return { success: true };
        } catch (error) {
            console.error("Error updating document:", error);
            return { success: false, error };
        }
    };

    // this is to delete databy given id
    const deleteDocument = async (id) => {
        try {
            const docRef = doc(firestore, collectionPath, id);
            await deleteDoc(docRef);
            return { success: true };
        } catch (error) {
            console.error("Error deleting document:", error);
            return { success: false, error };
        }
    };

    // set document
    const setDocument = async (id, data) => {
        await setDoc(doc(firestore, collectionPath, id), data);
    };

    // get document by id
    const getDocumentById = (id) => {
        return documents.find((doc) => doc.id === id);
    };

    const getDocumentByIdNoCache = async (id) => {
        const docRef = doc(firestore, collectionPath, id);
        return await getDoc(docRef);
    };

    return {
        documents,
        addDocument,
        updateDocumentById,
        deleteDocument,
        getDocumentById,
        setDocument,
        getDocumentByIdNoCache,
    };
};

export default useFirestore;
