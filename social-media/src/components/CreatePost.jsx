import { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";

const CreatePost = () => {
    const {addPost} = useContext(PostList);
    const titleElement = useRef();
    const descriptionElement = useRef();
    const userIDElement = useRef();
    const reactionsElement = useRef();
    const tagesElement = useRef();

    const submitForm = (event) => {
        event.preventDefault();
        const data = {
            id: Date.now(),
            title: titleElement.current.value,
            body: descriptionElement.current.value,
            userId: userIDElement.current.value,
            reactions: reactionsElement.current.value,
            tages: tagesElement.current.value.split(""),
        };
        addPost(data);
    };

    return <form className="add-post-form" onClick={submitForm}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" ref={titleElement} className="form-control" id="title" />
        </div>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" ref={descriptionElement} className="form-control" id="description" />
        </div>
        <div className="mb-3">
            <label htmlFor="userID" className="form-label">User</label>
            <input type="text" ref={userIDElement} className="form-control" id="userID" />
        </div>
        <div className="mb-3">
            <label htmlFor="reactions" className="form-label">Reactions</label>
            <input type="text" ref={reactionsElement} className="form-control" id="reactions" />
        </div>
        <div className="mb-3">
            <label htmlFor="tages" className="form-label">Tags</label>
            <input type="text" ref={tagesElement} className="form-control" id="tages" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
};

export default CreatePost;