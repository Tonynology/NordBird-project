export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'tonymoon',
        },
        content: 'first post #express',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=2018726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: 'congratulation!',        
        }, {
            User: {
                nickname: 'moon',
            },
            content: 'haha nice',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';    //오타방지 차원에서 변수로 빼주는게 좋다. 

export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: 'this is dummy',
    User: {
        id: 1,
        nickname: 'Tony',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
};

export default reducer;