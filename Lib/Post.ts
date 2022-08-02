export const GetPost = async () => {
  return await fetch("http://localhost:4000/api/post", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};

export const GetPostById = async (postid: string | string[] | undefined) => {
  return await fetch(`http://localhost:4000/api/post/${postid}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};
