export const UserRequest = () => ({
  type: 'UserRequest',
  
})

export const UserSuc = (payload) => ({
  type: 'UserSUC',
  payload
})


export const UserFailed = (payload) => ({
  type: 'UserFailed',
  payload
})

