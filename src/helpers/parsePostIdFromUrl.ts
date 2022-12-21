export const parsePostIdFromUrl = (url: string) => {
    let postId = url;
    if (postId.lastIndexOf("/") === postId.length - 1) {
      const id = postId.substring(0, postId.lastIndexOf("/"));
      postId = id.substring(id.lastIndexOf("/") + 1, id.length);
    }
    postId = postId.substring(postId.lastIndexOf("/") + 1, postId.length);
    return postId.trim();
  };