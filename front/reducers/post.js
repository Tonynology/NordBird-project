import shortId from 'shortid';
import produce from 'immer';
// import faker from 'faker';

export const initialState = {
    // mainPosts: [{
    //     id: 1,
    //     User: {
    //         id: 1,
    //         nickname: 'tonymoon',
    //     },
    //     content: 'first post #express',
    //     Images: [{
    //         id: shortId.generate(),
    //         src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?update=2018726',
    //     }, {
    //         id: shortId.generate(),
    //         src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    //     }, {
    //         id: shortId.generate(),
    //         src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    //     }],
    //     Comments: [{
    //         id: shortId.generate(),
    //         User: {
    //             id: shortId.generate(),
    //             nickname: 'nero',
    //         },
    //         content: 'congratulation!',        
    //     }, {
    //         id: shortId.generate(),
    //         User: {
    //             id: shortId.generate(),
    //             nickname: 'moon',
    //         },
    //         content: 'haha nice',
    //     }]
    // }],
    mainPosts: [],
    imagePaths: [],
    hasMorePost: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
    retweetLoading: false,
    retweetDone: false,
    retweetError: null,
}

// export const generateDummyPost = (number) => Array(number).fill().map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.name.findName()
//     },
//     content: faker.lorem.paragraph,
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.name.findName()
//         },
//         content: faker.lorem.sentence(),
//     }],
// }));

// initialState.mainPosts = initialState.mainPosts.concat(generateDummyPost(10));

export const UPLOAD_IMAGE_REQUEST = 'UPLOAD_IMAGE_REQUEST';     
export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS'; 
export const UPLOAD_IMAGE_FAILURE = 'UPLOAD_IMAGE_FAILURE'; 

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';    //오타방지 차원에서 변수로 빼주는게 좋다. 
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS'; 
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE'; 

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';    
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS'; 
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE'; 

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';    
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS'; 
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE'; 

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';    
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS'; 
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE'; 

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';   
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS'; 
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE'; 

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';    
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS'; 
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE'; 

export const RETWEET_REQUEST = 'RETWEET_REQUEST';    
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS'; 
export const RETWEET_FAILURE = 'RETWEET_FAILURE'; 

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

// const dummyPost = (data) => ({
//     id: shortId.generate(),
//     content: data,
//     User: {
//         id: 1,
//         nickname: 'Tony',
//     },
//     Images: [],
//     Comments: [],
// });

// const dummyComment = (data) => ({
//     id: data.id,
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: 'Tony',
//     },
// });

// 이전 상태를 액션을 통해 다음상태로 만들어내는 함수 (불변성은 지키면서.)
const reducer = (state = initialState, action) => {
    //immer (produce) 를 사용하면 알아서 불변성을 지켜준다.
    return produce(state, (draft) => {
        switch (action.type) { 
            case RETWEET_REQUEST:
                draft.retweetLoading = true;
                draft.retweetDone = false;
                draft.retweetError = null;
                break;
            case RETWEET_SUCCESS:{
                draft.retweetLoading = false;
                draft.retweetDone = true;   
                draft.mainPosts.unshift(actino.data);             
                break;    
            }
            case RETWEET_FAILURE:
                draft.retweetLoading = false;
                draft.retweetError = action.error;
                break;            
            case REMOVE_IMAGE:  //이건 동기 함수, 나머진 비동기
                draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
                break;
            case UPLOAD_IMAGE_REQUEST:
                draft.uploadImagesLoading = true;
                draft.uploadImagesDone = false;
                draft.uploadImagesError = null;
                break;
            case UPLOAD_IMAGE_SUCCESS:{
                draft.imagePaths = action.data;
                draft.uploadImagesLoading = false;
                draft.uploadImagesDone = true;                
                break;    
            }
            case UPLOAD_IMAGE_FAILURE:
                draft.uploadImagesLoading = false;
                draft.uploadImagesError = action.error;
                break;            
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS:{
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers.push({ id: action.data.UserId });
                draft.likePostLoading = false;
                draft.likePostDone = true;                
                break;    
            }
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError = action.error;
                break;            
            case UNLIKE_POST_REQUEST:
                draft.unlikePostLoading = true;
                draft.unlikePostDone = false;
                draft.unlikePostError = null;
                break;
            case UNLIKE_POST_SUCCESS:{
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
                draft.unlikePostLoading = false;
                draft.unlikePostDone = true;                
                break;    
            }
            case UNLIKE_POST_FAILURE:
                draft.unlikePostLoading = false;
                draft.unlikePostError = action.error;
                    break;                
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                draft.mainPosts = action.mainPosts.concat(action.data);
                draft.hasMorePost = draft.data.length === 10;
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
                draft.mainPosts.unshift(action.data);
                draft.imagePaths = [];
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
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
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
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Comments.unshift(action.data);
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