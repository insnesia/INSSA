  function inpo() {
  fetch(`https://api.telegra.ph/getPage/inspo-05-31?return_content=false`,{method: &#39;GET&#39;})
  .then((response) =&gt; {
    return response.json()
  })
  .then((data) =&gt; {
	document.getElementById(&quot;info&quot;).innerHTML = data.result.description;
   iples();
  })
  .catch((err) =&gt; {
    // Do something for an error here
  })
 
}
  
  window.addEventListener(&#39;DOMContentLoaded&#39;, (event) =&gt; {
     inpo();
});
