// import { initializeApp } from 'firebase/app';
// import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from 'firebase/firestore';
// import { Post } from '../types/data';

// const firebaseConfig = {
//     apiKey: "AIzaSyCspx3Rb4sp29Vh7mY2M6rLldBTiVLkE2g",
//     authDomain: "songs-e8720.firebaseapp.com",
//     projectId: "songs-e8720",
//     storageBucket: "songs-e8720.appspot.com",
//     messagingSenderId: "550395699183",
//     appId: "1:550395699183:web:fc148de80a26d2c964e01a",
//     measurementId: "G-1P6PPRXY9V"
//   };

// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);
// const songDocuments = collection(db, 'songs');

// export const addSongs = async (Post: Post) => {
// 	try {
// 		await addDoc(songDocuments, Post);
// 		console.log('Se añadió');
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

// export const getSongs = async () => {
// 	const querySnapshot = await getDocs(songDocuments);
// 	const songs: Post[] = [];

// 	querySnapshot.docs.forEach((doc: any) => {
// 		const data: Omit<Post, 'id'> = doc.data() as any;
// 		const songData = doc.data() as Post;
// 		songs.push(songData);
// 	});
// 	console.log(songs);
// 	return songs;
// };