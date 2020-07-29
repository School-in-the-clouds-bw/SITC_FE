const initialState = {
    isFetching: false,
    task:{
        taskName:'',
        taskDescription:''
    },
    admin:'',
    volunteer:'',
    student:'',
    error:''
}

export const reducer = (state = initialState, action ) => {
    switch(action.type){
        default:
            return state
    }
};