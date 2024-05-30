import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { Post } from "../types/data";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { appState } from "../store";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCspx3Rb4sp29Vh7mY2M6rLldBTiVLkE2g",
  authDomain: "songs-e8720.firebaseapp.com",
  projectId: "songs-e8720",
  storageBucket: "songs-e8720.appspot.com",
  messagingSenderId: "550395699183",
  appId: "1:550395699183:web:fc148de80a26d2c964e01a",
  measurementId: "G-1P6PPRXY9V",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export const createUser = (
  username: string,
  age: number,
  benchpress: number,
  deadLift: number,
  squat: number,
  emailaddress: string,
  password: string
) => {
  createUserWithEmailAndPassword(auth, emailaddress, password)
    .then(async (userCredential) => {
      const firebaseUser = userCredential.user;
      try {
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const data = {
          username: username,
          age: age,
          benchpress: benchpress,
          deadLift: deadLift,
          squat: squat,
          emailaddress: emailaddress,
          profile:
            "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
        };
        await setDoc(userDocRef, data);
        alert("Se creó el usuario");
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
  let authUser: any = "";

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      authUser = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorMessage);
    });
};

export const getUserByid = async (id: string) => {
  const docRef = doc(db, "users", id);
  const docsnap = await getDoc(docRef);
  return docsnap.data();
};

export const subirPost = async (imagen: File) => {
  const URLimagen = await subirImagen(imagen);
  addPost(
    appState.userdata.username,
    appState.userdata.emailaddress,
    URLimagen,
    appState.userdata.profile
  );
};

export const addPost = async (
  userName: string,
  userId: string,
  imageURL: string,
  userProfileImage: string
) => {
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      name: userName,
      userId: userId,
      image: imageURL,
      profileImage: userProfileImage,
    });
  } catch (e) {}
};

const subirImagen = async (imagen: File) => {
  const storageRef = await ref(storage, `imagesPosts/${imagen.name}`);
  await uploadBytes(storageRef, imagen).then((snapshot) => {});
  return getDownloadURL(storageRef);
};

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  const arrayProducts: Array<Post> = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as any;
    arrayProducts.push({ id: doc.id, ...data });
  });

  return arrayProducts;
};

export const getPostsProfile = async (idUser: string) => {
  const q = query(collection(db, "posts"), where("idUser", "==", idUser));
  const querySnapshot = await getDocs(q);
  const arrayProducts: Array<Post> = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as any;
    arrayProducts.push({ id: doc.id, ...data });
  });

  return arrayProducts;
};

export const actualizarDatosUsuario = async (
  benchPressParam: number,
  deadLiftParam: number,
  squatParam: number,
  ageParam: number
) => {
  console.log("actualizarDatosUsuario")
  const userRef = doc(db, "users", appState.user);
  await updateDoc(userRef, {
    benchpress: benchPressParam,
    deadLift: deadLiftParam,
    squat: squatParam,
    age: ageParam,
  });
};

export const actualizarDatosUsuarioConImagen = async (
  img: File,
  benchPressParam: number,
  deadLiftParam: number,
  squatParam: number,
  ageParam: number
) => {
  console.log("actualizarDatosUsuarioConImagen")
  const userRef = doc(db, "users", appState.user);

  const imageURL = await subirImagen(img);

  await updateDoc(userRef, {
    profile: imageURL,
    benchpress: benchPressParam,
    deadLift: deadLiftParam,
    squat: squatParam,
    age: ageParam,
  });
};
