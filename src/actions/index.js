export const readAllUsers = () => {
  return {
    type: 'READ_ALL_USERS'
  }
}

export const createNewUser = (name, email) => {
  return {
    type: 'CREATE_NEW_USER',
    name: 'paul',
    email: 'test'
  }
}