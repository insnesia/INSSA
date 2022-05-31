  function inpo() {
  fetch(`https://api.telegra.ph/getPage/inspo-05-31?return_content=false`,{method: 'GET'})
  .then((response) => {
    return response.json()
  })
  .then((data) => {
	document.getElementById("info").innerHTML = data.result.description;
   iples();
  })
  .catch((err) => {
    // Do something for an error here
  })
 
}
  
  window.addEventListener('DOMContentLoaded', (event) => {
     inpo();
});
