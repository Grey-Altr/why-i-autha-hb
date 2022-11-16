// use checkAuth function to redirect is user not authenticated
import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
// add event listener to the logout button and call logout
logoutButton.addEventListener('click', () => {
    logout();
});
