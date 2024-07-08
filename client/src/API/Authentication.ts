<<<<<<< HEAD
=======
import Users from "../pages/Users";


>>>>>>> ef998bf5443c8b44f63395ae3bf793eeaa7c5a51
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
