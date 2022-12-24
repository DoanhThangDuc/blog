export const parsePostIdFromUrl = (url: string) => {
  let postId = url;
  if (postId.lastIndexOf("/") === postId.length - 1) {
    const id = postId.substring(0, postId.lastIndexOf("/"));
    return (postId = id.substring(id.lastIndexOf("/") + 1, id.length));
  }
  if (postId.includes("id=")) {
    return (postId = postId.substring(
      postId.lastIndexOf("id=") + 3,
      postId.length
    ));
  }
  return (postId = postId
    .substring(postId.lastIndexOf("/") + 1, postId.length)
    .trim());
};
