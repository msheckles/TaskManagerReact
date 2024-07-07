

export const login = async (email: string, password: string) => {
  let url = "http://localhost:8000" + "/user/login";
  console.log(url);
  
  let data = {
    email: email,
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

export const register = async (email: string, password: string) => {
  let url = "http://localhost:8000" + "/user/register";
  let data = {
    email: email,
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