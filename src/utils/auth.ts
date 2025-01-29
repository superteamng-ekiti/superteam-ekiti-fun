import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/config';
import { encryptToken } from './encrypt';


// Sign in with GitHub
export const signInWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential =await GithubAuthProvider.credentialFromResult(result);
    const githubAccessToken = await credential?.accessToken;
    const encryptedToken = await encryptToken(githubAccessToken ?? "");
    localStorage.setItem("accessToken", encryptedToken);
    const user = await result.user;
    return {
      user,
      token: encryptedToken,
    };
  } catch (error: any) {
    // console.error('GitHub Login Error:', error.message);
  }
};

// Sign out
export const logoutGithub = async () => {
  try {
    await signOut(auth);

    // console.log('User signed out');
  } catch (error) {
    // console.error('Logout Error:', error.message);
  }
};
