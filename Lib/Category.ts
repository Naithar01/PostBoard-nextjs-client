export const GetCategory = async () => {
  return await fetch("http://localhost:4000/api/category", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
};
