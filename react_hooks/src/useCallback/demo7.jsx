// Ensures updateUser function reference remains the same.

import React, { createContext, useState, useCallback, useContext } from "react";

// Create a UserContext to provide and consume user data
const UserContext = createContext();

const UserProvider = ({ children }) => {
  // State to store user information
  const [user, setUser] = useState({ name: "Alice" });

  // Memoized function using useCallback
  // Ensures `updateUser` function reference remains the same across renders
  const updateUser = useCallback((name) => {
    setUser({ name });
  }, []); // Dependency array is empty, meaning it won't be recreated unnecessarily

  return (
    // Provide user state and updateUser function to children components
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

const UserProfile = () => {
  // Consume user state and updateUser function from UserContext
  const { user, updateUser } = useContext(UserContext);

  return (
    // Button to update the user's name when clicked
    <button onClick={() => updateUser("Bob")}>
      Change Name (Current: {user.name})
    </button>
  );
};

const Contextwithcallback = () => (
  // Wrap the component tree with UserProvider to give access to context
  <UserProvider>
    <UserProfile />
  </UserProvider>
);

export default Contextwithcallback;

// This pattern is useful for global state management without excessive re-renders.
