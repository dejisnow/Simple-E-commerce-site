window.onload=()=>{
    

let main = document.querySelector(".main")
    
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then((data)=>{
    var store = ""
    data.map((items ) =>{
        
       store += `
    <div class="cont">
       <h1 class="title">${items.title}</h1>
            
         <img src ="${items.image}" class="img">
       <p class="price">$${items.price}</p>
        
      <dl class="description">${items.description}</dl>
     </div> `  
    
        })
     main.innerHTML = store    
        
    }).catch(err=>console.log(err ))
    
    
    
    
