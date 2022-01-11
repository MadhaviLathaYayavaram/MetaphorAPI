async function getMetaphor(paras,sentences) {
    const data = await 
    fetch(`http://metaphorpsum.com/paragraphs/${paras}/${sentences}` , { method:"GET" });
    const description=await data.json();
    console.log(JSON.stringify(description.data));
    return description;
  }
  
  
    async function displayInfo() {
      let paras = parseInt(document.getElementById('paras').value);
      let sentences = parseInt(document.getElementById('sentences').value);
     
        console.log (paras, sentences);
        
    const wordinfo  = [] = await getMetaphor(paras,sentences);
        console.log (wordinfo);
       
  
  } 

