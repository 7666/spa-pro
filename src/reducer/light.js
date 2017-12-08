export const light = (state, action) =>{
  switch (action.type){
    case 'LIGHT':
      return{
        ...state,
        data:action.payload
      }
    default:
      return{
        data:'dark'
      }
  }
}
