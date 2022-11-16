import { redirectIfLoggedIn, signInUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('');

// Wire up sign in and sign up forms to supabase
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = await signInUser(signInEmail.value, signInPassword.value);
    // Redirect to /other-page on successful auth
    if (user) {
        redirectIfLoggedIn();
    } else {
        console.error(user);
    }
});
// Redirect to /other-page when page loads if user is authenticated
