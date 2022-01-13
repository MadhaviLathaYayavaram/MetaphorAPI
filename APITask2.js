function getMetaphor(p,s) {
  let metaphor = fetch(`http://metaphorpsum.com/paragraphs/${p}/${s}`)
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    return data;
  });
  return metaphor;
}
  async function displayInfo() {
    let paras = parseInt(document.getElementById('paras').value);
    let sentences = parseInt(document.getElementById('sentences').value);
   
   
  const wordinfo = await getMetaphor(paras,sentences);
      console.log (wordinfo);
     document.getElementById('metaphor').innerHTML = wordinfo;

} 