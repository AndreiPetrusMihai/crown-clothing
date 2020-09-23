import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCtj9FSZDQin1aBSJ1bHUWgTlXFdqPAgmg",
    authDomain: "crwn-db-8a4fa.firebaseapp.com",
    databaseURL: "https://crwn-db-8a4fa.firebaseio.com",
    projectId: "crwn-db-8a4fa",
    storageBucket: "crwn-db-8a4fa.appspot.com",
    messagingSenderId: "879427449569",
    appId: "1:879427449569:web:4f58520085385fd560bda0",
    measurementId: "G-JKLLTF8E9H"
  };

export const createUserProfileDocument = async (userAuth,additionalData) =>{
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if(!snapShot.exists)
	{
		const {displayName,email} = userAuth;
		const createdAt = new Date();
		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}catch(error){
			console.log('error creating user',error.message);
		}
	}
	return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'});


export const signInWithGoogle = () => {auth.signInWithPopup(provider)};
export default firebase;