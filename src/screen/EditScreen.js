import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogFormPost";

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const blogPost = state.find((i) => i.id === route.params.id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(newTitle, newContent) =>
        editBlogPost(blogPost.id, newTitle, newContent, () => {
          navigation.pop();
        })
      }
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
