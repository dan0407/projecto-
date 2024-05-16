import { initializeApp } from 'firebase/app'
import { addDoc, collection, doc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { Post } from '../types/data';

const firebaseConfig = {
    apiKey: "AIzaSyCspx3Rb4sp29Vh7mY2M6rLldBTiVLkE2g",
    authDomain: "songs-e8720.firebaseapp.com",
    projectId: "songs-e8720",
    storageBucket: "songs-e8720.appspot.com",
    messagingSenderId: "550395699183",
    appId: "1:550395699183:web:fc148de80a26d2c964e01a",
    measurementId: "G-1P6PPRXY9V"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export const getPosts =async () => {
// Query a reference to a subcollection
const querySnapshot = await getDocs(collection(db, "posts"));
const postData: Array<any> = []
querySnapshot.forEach((doc: any) => {
  postData.push(doc.data())
});
return postData
}
export const registrarUsuario = async (user: string, age: number, benchpress: number, deadLift: number, squat: number,  emailaddress: string, password: string )=> {
  const docRef = await addDoc(collection(db, "users"), {
    user: user,
    age: age,
    benchpress: benchpress,
    deadLift: deadLift,
    squat: squat,
    emailaddress: emailaddress,
    password: password,
  
  });
  //console.log("Document written with ID: ", docRef.id);
  await updateDoc(docRef, {
    firebaseID: docRef.id
  });
  return docRef.id
}