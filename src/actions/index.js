export const createNewUser = (username, email, password) => {
  return {
    type: 'CREATE_NEW_USER',
    username,
    email,
    password
  }
}

export const readCurrentUser = () => {
  return {
    type: 'READ_CURRENT_USER',
  }
}

// simplified arrow functions
export const readAllUsers = () => ({
    type: 'READ_ALL_USERS'
});

export const loginUser = (email, password) => {
  return {
    type: 'LOGIN_USER',
    email,
    password,
  }
}

export const signOut = () => {
  return {
    type: 'LOGOUT_USER',
  }
}

// export const fetchUser = ()