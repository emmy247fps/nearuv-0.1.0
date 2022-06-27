import itemDetailPage from "../../../Display/general/all-screens/ItemDetailPage"

const itemDetailPage ={
    img: [],
    text:[],
    describtion:[]
}

function itemreducer (state= initState,action){
    if(action.type == '') {
        return {
            ...state,
            img: [...state.action]
        }
    }
}


