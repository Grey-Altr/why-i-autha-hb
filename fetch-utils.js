// Enter Supabase Information
const SUPABASE_URL = 'https://pwsxvrnlhooihwcxftvf.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB3c3h2cm5saG9vaWh3Y3hmdHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxMDg2MzQsImV4cCI6MTk4MzY4NDYzNH0.ITSI6KK7aGizRAaYZ1zCgnyVWSXCZKMfeSCKISd7IXg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function signupUser(email, password) {}

export async function signInUser(email, password) {}

export async function checkAuth() {}

export async function redirectIfLoggedIn() {}

export async function logout() {}
