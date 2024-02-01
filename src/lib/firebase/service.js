import { getDocs, getFirestore, collection } from "firebase/firestore";
import app from "./init";

const firestore = getFirestore(app);

export async function retrieveData() {
  const snapshot = await getDocs(collection(firestore, "products"));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}
