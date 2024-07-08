import Users from "../pages/Users";


export const login = async (username: string, password: string) => {
  let url = "http://localhost:8000" + "/token";
};

export const register = async (username: string, password: string) => {
  let url = "http://localhost:8000" + "/user/register";
  let data = {
    email: username,
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