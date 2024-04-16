export const getAllavaibleInstructorsAndSessions = async () => {
  const res = await fetch("http://localhost:3000/instructor/show");
  const data = await res.json();

  return data.data;
};
