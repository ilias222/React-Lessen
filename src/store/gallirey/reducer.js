import { ADD_GALLIREY, GET_ARR_ERR, GET_ARR_SUCCES, GET_ARR_LOADING } from "./constant"

export const ChakTest = {
    Chak : [
    {
        names: 'Chak',
        id: 1,
        title: 'Im Chak Norris'
    },
    {
        names: 'Chak',
        id: 2,
        title: 'Im Big Boss'
    }
]
}

export const gallireyReducer = (state = ChakTest, action) => {
    const { type, payload } = action
    switch (type) {
        case ADD_GALLIREY:
            return {
                ...state,
                [payload.names]:[
                    ...state[payload.names],
                    {
                    names: payload.names, 
                    id: payload.id,
                    title: payload.title
                }]
            }
            case GET_ARR_ERR:
                return {
                    ...state,
                    [payload]:[
                        ...state[payload],
                        {
                        names: payload.error, 
                        id: payload.id,
                        date: payload.DATETYPE,
                        error: payload.err
                    }]
                }
                case GET_ARR_SUCCES:
                    return {
                        ...state,
                        [payload.name]:[
                            ...state[payload],
                            {
                            names: payload.succes, 
                            id: payload.id,
                            date: payload.DATETYPE
                        }]
                    }
                    case GET_ARR_LOADING:
                        return {
                            ...state,
                            [payload]:[
                                ...state[payload],
                                {
                                names: payload.loading, 
                                id: payload.id,
                                date: payload.DATETYPE,
                            }]
                        }
    
        default:
            return state
    }
}