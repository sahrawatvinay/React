import { createContext, useReducer } from "react";

const DEFAULT_POST_LIST = [{
    id: '1',
    title: "Going to mumbai",
    body: "it will be a lot of fun",
    reactions: 2,
    userId: "user-4",
    tages: ["vacation", "mumbai", "enjoying"]
}, {
    id: '2',
    title: "Pass ho agye bro",
    body: "unbelieveable, hard to believe.",
    reactions: 15,
    userId: "user-6",
    tages: ["exams", "engineering"]
}];

// Creating a context named PostList with a default value.
// The default value is an object with an empty postList array and two functions (addPost and deletePost) that do nothing by default.
const PostList = createContext({
    postList: [],
    addPost: () => { },  // Default empty function for adding a post
    deletePost: () => { } // Default empty function for deleting a post
});

// The reducer function for managing the state of the post list.
// It takes the current state (currPostList) and an action, and returns a new state.
// Currently, the reducer just returns the current state without making any changes.
const postListReducer = (currPostList, action) => {
    return currPostList;  // Placeholder: no logic to handle actions yet
};

// The provider component for PostList context.
// It wraps its children with the PostList.Provider, making the context available to any component within this provider.
const PostListProvider = ({ children }) => {
    // useReducer hook initializes the state (postList) and provides a dispatch function (dispatchPostList) to update it.
    // postList starts as an empty array.
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    // Function for adding a post to the list (currently a placeholder).
    const addPost = () => { };

    // Function for deleting a post from the list (currently a placeholder).
    const deletePost = () => { };

    // Providing the postList state and the functions to the context.
    // Any component that consumes this context can access the postList, addPost, and deletePost.
    return <PostList.Provider value={{ postList, addPost, deletePost }}>{children}</PostList.Provider>;
}

// Exporting the provider component so it can be used to wrap other components.
export default PostListProvider;


/**
createContext: Creates a context to share data (postList, addPost, deletePost) across components without prop drilling.
useReducer: Manages the state of the postList. Right now, the reducer is a placeholder and doesn't modify the state.
PostListProvider: Wraps its children with PostList.Provider, allowing them to access the shared context values (postList, addPost, deletePost).
 */