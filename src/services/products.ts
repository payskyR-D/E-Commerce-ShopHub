
import { db } from "../Firebase/Firebase";
import { doc, setDoc, collection, getDocs, getDoc } from "firebase/firestore";

export const getProducts = async () => {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProductById = async (id: string) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const API_URL = "https://dummyjson.com/products?limit=0";

export const uploadProductsToFirestore = async () => {
  try {
    console.log("🚀 Start Fetch");

    const response = await fetch(API_URL);

    console.log("📥 Response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    console.log(`📦 Products Count: ${data.products.length}`);

    for (const product of data.products) {
      console.log(`⬆️ Uploading Product: ${product.id}`);

      await setDoc(
        doc(db, "products", product.id.toString()),
        product
      );
    }

    console.log("✅ Products uploaded successfully");
  } catch (error) {
    console.error("❌ Upload Error:", error);
    throw error;
  }
};