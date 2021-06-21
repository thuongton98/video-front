import{FETCH_VIDEO,NEW_VIDEO,FETCH_USER,NEW_USER,FETCH_CHANNEL,NEW_CHANNEL} from '../redux/actions/types'

const initialState={
    videos:[],
    video:{},
    users:[],
    user:{},
    channels:[],
    channel:{},
}

export default function(state=initialState,action){
    switch(action.type){
        case FETCH_VIDEO:
           
            return{
                ...state,
                videos:action.payload
            }
        case NEW_VIDEO:
            return{
                ...state,
                video:action.payload
            }
            case FETCH_USER:
           
            return{
                ...state,
                users:action.payload
            }
        case NEW_USER:
            return{
                ...state,
                user:action.payload
            }
             case FETCH_CHANNEL:
           
            return{
                ...state,
                channels:action.payload
            }
        case NEW_CHANNEL:
            return{
                ...state,
                channel:action.payload
            }
        default:
            return state;
    }
}