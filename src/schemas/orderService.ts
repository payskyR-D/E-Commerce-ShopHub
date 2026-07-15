import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

export const createOrder = async (orderData: any) => {
  const ordersRef = collection(db, "orders");

  const docRef = await addDoc(ordersRef, {
    ...orderData,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
};