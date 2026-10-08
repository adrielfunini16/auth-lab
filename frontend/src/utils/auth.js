export const BASE_URL = "http://localhost:3000";

export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  }).then((res) => {
    res.ok ? res.json() : Promise.reject(`Erro: ${res.status}`);
  });
};
