export const login = async (username: string, password: string) => {
  let url = "http://localhost:8000" + "/token";
};

export const register = async (username: string, password: string) => {
  let url = "http://127.0.0.1:8000/Login";
  let data = {
    username: username,
    password: password,
  };
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return await response.json();
  }
};
