export const readAllUsers = () => {
  return {
    type: 'READ_ALL_USERS'
  }
}

export const createNewUser = (email, password, username) => {
  return {
    type: 'CREATE_NEW_USER',
    email,
    password,
    username
  }
}