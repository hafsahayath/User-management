const userInitialState = []

const userReducer = (state=userInitialState, action) => {
    switch (action.type) {
        case 'ADD_USER':{
            return [...state, {...action.payload}]
        }
        
        case 'TOGGLE_STATUS':{
            const res = state.map(ele=>{
                if(ele.id === action.payload){
                    return {...ele, status:!ele.status}
                } else {
                    return {...ele}
                }
            })
            return res
        }

        case 'REMOVE_USER':{
            const res = state.filter(ele=>{
                return ele.id!==action.payload
            })
            return res
        }

        case 'ACTIVATE_ALL':{
            const res = state.map(ele=>{
                return {...ele, status:true}
            })
            return res
        }

        case 'DEACTIVATE_ALL':{
            const res = state.map(ele=>{
                return {...ele, status:false}
            })
            return res
        }

        default:
            return [...state]
    }
}

export default userReducer