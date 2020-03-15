const API_URL = '/api/posts';

const list = (responseCallback, loadingCallback) => {
    fetch(`${API_URL}`)
    .then(response => {
      if(response.ok)
      {
        return response.json();         
      }

      throw response;
    })
    .then(response => {
      responseCallback(response);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => loadingCallback(false));
}

export default {list};