import createDataContext from "./createDataContext";
import jsonserver from "../api/jsonserver";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "Get":
      return action.payload;
    case "Edit":
      return state.map((blogPost) => (blogPost.id === action.payload.id ? action.payload : blogPost));
    case "Delete":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonserver.get("/blogposts");

    dispatch({ type: "Get", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    await jsonserver.post("/blogposts", { title, content });

    if (typeof callback == "function") callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({ type: "Delete", payload: id });
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonserver.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: "Edit", payload: { id, title, content } });

    if (typeof callback == "function") callback();
  };
};

export const { Context, Provider } = createDataContext(blogReducer, { getBlogPosts, addBlogPost, deleteBlogPost, editBlogPost }, []);
