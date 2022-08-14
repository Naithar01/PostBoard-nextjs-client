export const GetCategory = async () => {
  return await fetch("http://localhost:4000/api/category", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};

export const CreateCategory = async (name: string) => {
  return await fetch("http://localhost:4000/api/category", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      name,
    }),
  });
};
