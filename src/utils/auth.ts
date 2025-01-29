import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/config';
import { encryptToken } from './encrypt';


// Sign in with GitHub
export const signInWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const githubAccessToken = credential?.accessToken;
    const encryptedToken = encryptToken(githubAccessToken ?? "");
    localStorage.setItem("accessToken", encryptedToken);
    const user = result.user;
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
