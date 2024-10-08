export const savePoll = async (data: any) => {
  const response = await fetch(`${process.env.API_URL}/api/poll`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return response.json();
  }

  throw new Error("Network response was not ok.");
};
