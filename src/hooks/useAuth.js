const useAuth = () => {
  // temporary auth state
  const user = null; // later you will connect backend

  return { user, isAuthenticated: !!user };
};

export default useAuth;
