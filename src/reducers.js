const initialState={
    result: ''
}
export const OnButtonPressReducer=(state=initialState, action={})=>{
    switch(action.type){
        case 'ONBUTTONPRESS':
            return Object.assign({}, state, {result:action.payload})
        default:
            return state
    }
}