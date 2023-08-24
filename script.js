function filterImage(){

 const buttons = document.querySelectorAll('.btn')
 const images = document.querySelectorAll('.store-item')

buttons.forEach((button)=>{
button.addEventListener('click',(e)=>{
   e.preventDefault()
   const filter = e.target.dataset.filter
 


  images.forEach((image )=>{

    if(filter == "all"){
        image.style.display = 'block';
    } else {
       if(image.classList.contains(filter)){
        image.style.display = 'block';
       } else{
        image.style.display = "none"
       }

  }})




})
})





}


filterImage()