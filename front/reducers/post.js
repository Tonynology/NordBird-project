import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'tonymoon',
        },
        content: 'first post #express',
        Images: [{
            id: shortId.generate(),
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=2018726',
        }, {
            id: shortId.generate(),
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            id: shortId.generate(),
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'nero',
            },
            content: 'congratulation!',        
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'moon',
            },
            content: 'haha nice',
        }]
    }],
    imagePaths: [],
    hasMorePost: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName()
    },
    content: faker.lorem.paragraph,
    Images: [{
        src: faker.image.image(),
    }],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName()
        },
        content: faker.lorem.sentence(),
    }],
}));

// initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';    //오타방지 차원에서 변수로 빼주는게 좋다. 
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'; 
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'; 

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';    //오타방지 차원에서 변수로 빼주는게 좋다. 
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'; 
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'; 

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';    //오타방지 차원에서 변수로 빼주는게 좋다. 
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'; 
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'; 

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';    //오타방지 차원에서 변수로 빼주는게 좋다. 
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'; 
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; 

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: 'Tony',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: 'Tony',
    },
});
// 이전 상태를 액션을 통해 다음상태로 만들어내는 함수 (불변성은 지키면서.)
const reducer = (state = initialState, action) => {
    //immer (produce) 를 사용하면 알아서 불변성을 지켜준다.
    return produce(state, (draft) => {
        switch (action.type) {
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.mainPosts = action.data.concat(draft.mainPosts);
                draft.hasMorePost = draft.mainPosts.length < 50;
                break;    
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError = action.error;
                break;            
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
                // return {
                //     ...state,
                //     addPostLoading: true,
                //     addPostDone: false,
                //     addPostError: null,
                // }
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(dummyPost(action.data));
                break;
                // return {
                //     ...state,
                //     mainPosts: [dummyPost(action.data), ...state.mainPosts],
                //     addPostLoading: false,
                //     addPostDone: true,
                // };
    
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
                // return {
                //     ...state,
                //     addPostLoading: false,
                //     addPostError: action.error,
                // }
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
                // return {
                //     ...state,
                //     removePostLoading: true,
                //     removePostDone: false,
                //     removePostError: null,
                // }
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
                break;
                // return {
                //     ...state,
                //     mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                //     removePostLoading: false,
                //     removePostDone: true,
                // };
    
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
                // return {
                //     ...state,
                //     removePostLoading: false,
                //     removePostError: action.error,
                // }
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
                // return {
                //     ...state,
                //     addCommentLoading: true,
                //     addCommentDone: false,
                //     addCommentError: null,
                // }
            case ADD_COMMENT_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.postId);
                post.Comments.unshift(dummyComment(action.data.content));
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = { ...state.mainPosts[postIndex] };
                // post.Comments = [dummyComment(action.data.content), ...post.Comments];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                // return {
                //     ...state,
                //     mainPosts,
                //     addCommentLoading: false,
                //     addCommentDone: true,
                // };            
            }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
                // return {
                //     ...state,
                //     addCommentLoading: false,
                //     addCommentError: action.error,
                // }
            default:
                break;
        }
    });


    
};

export default reducer;