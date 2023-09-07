import React, { createContext, useState } from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  
  async function handleSignOut() {
    await auth().signOut()
    .then(async () => {
      await GoogleSignin.signOut()
      .then(async () => {
        await GoogleSignin.revokeAccess();
        setUser(null);
        ToastAndroid.show('Saiu com sucesso', ToastAndroid.SHORT);
      })
      .catch(() => setUser(null));
    })
    .catch(() => ToastAndroid.show('Erro ao sair', ToastAndroid.SHORT));
  };

  async function handleGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential)
      .then((user) => {
        console.log(user)
        navigation.navigate('SavedScreen');
      })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleGoogleSignIn, handleSignOut }}>
      {children}
    </UserContext.Provider>
  );
}