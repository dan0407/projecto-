import { initializeApp } from 'firebase/app'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc,query, where } from 'firebase/firestore';
import { Post } from '../types/data';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { appState, dispatch } from '../store';



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
export const auth = getAuth(app);
const db = getFirestore(app);


export const createUser = (username: string, age: number, benchpress: number, deadLift: number, squat: number, emailaddress: string, password: string) => {
  createUserWithEmailAndPassword(auth, emailaddress, password)
  .then(async (userCredential) => {
      const firebaseUser = userCredential.user;
      console.log(firebaseUser.uid);

      try {
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const data = {
              username: username,
              age: age,
              benchpress: benchpress,
              deadLift: deadLift,
              squat: squat,
              emailaddress: emailaddress,
              profile: "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
          };
          await setDoc(userDocRef, data);
          alert('Se creó el usuario');
      } catch (error) {
          console.error("Error writing document: ", error);
      }
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
  });
};


export const iniciarSesion = async (email: string, password: string) => {
  let authUser: any = ""


  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      authUser = userCredential.user;
      console.log(authUser)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage)
    });


}

export const getUserByid = async (id: string) => {
  const docRef  = doc(db, "users", id)
  const docsnap = await getDoc(docRef)
  return docsnap.data()
}


export const getData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      console.log("Hola")
      console.log(data);

    });
  } catch (error) {
    console.error("Error getting documents: ", error);
  }
};
export const addPost = async (formData: Omit<Post, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'posts'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getPosts = async () => {
	const querySnapshot = await getDocs(collection(db, 'posts'));
	const arrayProducts: Array<Post> = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};

export const getPostsProfile = async (idUser: string) => {
  const q = query(collection(db, 'posts'), where('idUser', '==', idUser));
  const querySnapshot = await getDocs(q);
  const arrayProducts: Array<Post> = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as any;
    arrayProducts.push({ id: doc.id, ...data });
  });

  return arrayProducts;
};
