const API_URL = '/api/users';

const login = (credentials, responseCallback, loadingCallback) => {
    fetch(`${API_URL}/login`, {
        method: "POST", 
        body: JSON.stringify(credentials),
        headers: {"Content-Type": "application/json"}
      })
    .then(response => {
      if(response.ok)
      {
        return response.json();         
      }

      throw response;
    })
    .then(response => {
      const {token} = response;
      localStorage.setItem('token', token);
      responseCallback(response);
    })
    .catch(error => {
      localStorage.removeItem('token');
    })
    .finally(() => loadingCallback(false));
}

export default {login};