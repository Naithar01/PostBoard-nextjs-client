export const GetPost = async () => {
  return await fetch("http://localhost:4000/api/post", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};

export const CreatePost = async (
  title: string,
  content: string,
  author: string
) => {
  return await fetch("http://localhost:4000/api/post", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      title: title,
      content: content,
      author: author,
    }),
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


