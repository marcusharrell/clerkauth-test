import React from "react";
import "./App.css";
// Import ClerkProvider
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

// Get the Frontend API from the environment
const frontendApi = 'clerk.central.zebra-47.lcl.dev';

function App() {
  return (
    // Wrap your entire app with ClerkProvider
    // Don't forget to pass the frontendApi prop
    <ClerkProvider frontendApi={frontendApi}>
      <Hello />
     
    </ClerkProvider>
  );
}

function Hello() {
    // Get the user's first name
    const { user } = useUser();

    return (
      <div className="App-header">
        {/* Mount the UserButton component */}
        <UserButton />
        {user ? <h1>Hello, {user.firstName}!</h1> : null}
      </div>
    );
  }

export default App;