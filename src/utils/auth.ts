import { GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '@/config';

// Sign in with GitHub
export const signInWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const token = (await user.getIdTokenResult()).token;
    // console.log('GitHub Access Token:', token); // Use this token for GitHub API requests
    return user;
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
