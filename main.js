
function get(){

  let container = document.getElementById("container")

  const dd = new Promise ((a)=>{
    fetch('https://dummyjson.com/products', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(e2 => e2.json())
    .then((e)=>a(e));
  })

  dd.then((e2)=>

      e2.products.map((a)=>

      container.innerHTML+=`<div class="wrapper">
  
      <img class="first img" src="${a.images[1]}" alt="">
      
      <h3 class="header">${a.title}</h3>
      
       <p>${a.description}</p>
      
       <button><a href="" id="link">Ətraflı...</a></button>
      
       </div>`
      
      
      )
  

  )
  .catch((c2)=>{
   console.log(c2)
  })
  .finally((d)=>{
   console.log(d)
  })
}

get()

