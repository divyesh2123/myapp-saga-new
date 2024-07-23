const initialState = {
    data:[],
    isLoading: false,
    error: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'UserRequest':
    return { ...state, isLoading: true }

    case 'UserSUC':
        return { ...state, isLoading: false,data:payload }

        
        case 'UserFailed':
            return { ...state, isLoading: false,error:payload }
        

  default:
    return state
  }
}
