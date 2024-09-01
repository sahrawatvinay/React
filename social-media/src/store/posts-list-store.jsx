import { createContext, useReducer } from "react";

// Creating a context named PostList with a default value.
// The default value is an object with an empty postList array and two functions (addPost and deletePost) that do nothing by default.
export const PostList = createContext({
    postList: [],
    addPost: () => { },  // Default empty function for adding a post
    deletePost: () => { }, // Default empty function for deleting a post
    addInitialPosts: () => { }
});

// The reducer function for managing the state of the post list.
// It takes the current state (currPostList) and an action, and returns a new state.
// Currently, the reducer just returns the current state without making any changes.
const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type == "DELETE_POST") {
        newPostList = currPostList.filter((post) => post.id !== action.payload.id);
    }
    else if (action.type == "ADD_POST") {
        newPostList = [action.payload.data, ...currPostList];
    }
    else if (action.type == "ADD_INITIAL_POST") {
        newPostList = action.payload.data;
    }
    return newPostList;  // Placeholder: no logic to handle actions yet
};

// The provider component for PostList context.
// It wraps its children with the PostList.Provider, making the context available to any component within this provider.
const PostListProvider = ({ children }) => {
    // useReducer hook initializes the state (postList) and provides a dispatch function (dispatchPostList) to update it.
    // postList starts as an empty array.
    const [postList, dispatchPostList] = useReducer(postListReducer, []);

    // Function for adding a post to the list (currently a placeholder).
    const addPost = (data) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: { data }
        })
    };

    // Function for deleting a post from the list (currently a placeholder).
    const deletePost = (id) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                id
            }
        });
    };

    const addInitialPosts = (data) => {
        dispatchPostList({
            type: "ADD_INITIAL_POST",
            payload: { data }
        });
    };

    // Providing the postList state and the functions to the context.
    // Any component that consumes this context can access the postList, addPost, and deletePost.
    return <PostList.Provider value={{ postList, addPost, deletePost, addInitialPosts }}>{children}</PostList.Provider>;
}

// Exporting the provider component so it can be used to wrap other components.
export default PostListProvider;


/**
createContext: Creates a context to share data (postList, addPost, deletePost) across components without prop drilling.
useReducer: Manages the state of the postList. Right now, the reducer is a placeholder and doesn't modify the state.
PostListProvider: Wraps its children with PostList.Provider, allowing them to access the shared context values (postList, addPost, deletePost).
 */