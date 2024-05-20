import { initializeApp } from 'firebase/app'
import { addDoc, collection, doc, getDocs, getFirestore, setDoc, updateDoc } from 'firebase/firestore';
import { Post } from '../types/data';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


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


export const getPosts = async () => {
  // Query a reference to a subcollection
  const querySnapshot = await getDocs(collection(db, "posts"));
  const postData: Array<any> = []
  querySnapshot.forEach((doc: any) => {
    postData.push(doc.data())
  });
  return postData
}

export const registrarUsuario = async (user: string, age: number, benchpress: number, deadLift: number, squat: number, emailaddress: string, password: string) => {
  await createUserWithEmailAndPassword(auth, emailaddress, password)
    .then(async (userCredential) => {
      // Signed up
      const userCredentials = userCredential.user.uid;

      console.log(userCredentials)

      const docRef = await addDoc(collection(db, "users"), {
        user: user,
        age: age,
        benchpress: benchpress,
        deadLift: deadLift,
        squat: squat,
        emailaddress: emailaddress,
        authCredentials: userCredentials
      });
      //console.log("Document written with ID: ", docRef.id);
      await updateDoc(docRef, {
        firebaseID: docRef.id
      });

      return docRef.id
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
}

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
    });


}

export const getUserByEmail = async (email: string | null) => {
  const querySnapshot = await getDocs(collection(db, "users"))
  querySnapshot.forEach((doc) => {
    const userData = doc.data()
    console.log(userData)
    if (userData.email === email) {
      return userData
    }
  })
}
export const addPost = async (formData: Omit<Product, 'id'>) => {
	try {
		const docRef = await addDoc(collection(db, 'posts'), formData);
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export const getPosts = async () => {
	const querySnapshot = await getDocs(collection(db, 'posts'));
	const arrayProducts: Array<Product> = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};

export const getPostsProfile = async (idUser: string) => {
	const q = query(collection(db, 'posts'), where('idUser', '==', idUser));
	const querySnapshot = await getDocs(q);
	const arrayProducts: Array<Product> = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};