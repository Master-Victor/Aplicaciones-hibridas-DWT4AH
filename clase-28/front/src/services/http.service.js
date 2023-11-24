export async function call({uri, method = "GET", body = undefined}) {
  return fetch(`http://localhost:2023/api/${uri}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(body),
  }).then( async (response) => {
    if (!response.ok || response.status === 401) {
      localStorage.removeItem("token");
      throw await response.json()
    }
    return response.json();
  });
}

export default{
    call    
}
