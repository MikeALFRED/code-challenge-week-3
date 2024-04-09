// Your code here
function filmsArray(){
    fetch("https://json-deploy-aizn.onrender.com/films")
    .then(res=>res.json())
    .then(filmsArray=>{
        displayMovieTitles(filmsArray)
        dispalyFirstFlim(filmsArray[0])
    })
}
filmsArray()

function displayMovieTitles(filmsarray){
    let ul=document.getElementById("films")
 
    filmsarray.map(movie=>{
        let li=document.createElement("li")
        let btn =document.createElement("button")
        btn.textContent= "DELETE" 
        btn.addEventListener("click",()=>handleDelete(movie))
        btn.className="btn" 
        li.className="film item"
        li.addEventListener("click",()=>handleClick(movie))
        li.textContent= movie.title
        li.append(btn)
        ul.appendChild(li)
    })
    
}

function dispalyFirstFlim(films){  

    let h1=document.getElementById("title")
    h1.textContent=films.title
    let div=document.getElementById("runtime")
    div.textContent=films.runtime 
    let p=document.getElementById("film-info")
    p.textContent=films.description
    let showtime=document.getElementById("showtime")
    showtime.textContent=films.showtime
    let remainingtickets=document.getElementById("ticket-num")
    remainingtickets.textContent=films.capacity-films.tickets_sold
    let MoviePoster=document.getElementById("poster")
    MoviePoster.src=films.poster
    let btn = document.getElementById("buy-ticket");
    btn.removeEventListener("click", handleTicket);
    btn.addEventListener("click", () => handleTicket(remainingtickets,films));


}


function handleClick(films){
    // console.log(movie)
    let h1=document.getElementById("title")
    h1.textContent=films.title
    let div=document.getElementById("runtime")
    div.textContent= films.runtime 
    let p=document.getElementById("film-info")
    p.textContent=films.description
    let showtime=document.getElementById("showtime")
    showtime.textContent=films.showtime
    let remainingtickets=document.getElementById("ticket-num")
    remainingtickets.textContent=films.capacity-films.tickets_sold
    let MoviePoster=document.getElementById("poster")
    MoviePoster.src=films.poster
    let btn = document.getElementById("buy-ticket");
    btn.removeEventListener("click", handleTicket);
    btn.addEventListener("click", () => handleTicket(remainingtickets, films))

}

function handleTicket(remainingtickets, films) {
    // console.log(data.tickets_sold)
    let count = parseInt(remainingtickets.textContent);
    if (count > 0) {
      count -= 1;
      remainingtickets.textContent = count;
    }
    console.log(films.id)
    

  }  function handleDelete(films){
    fetch(` https://json-deploy-aizn.onrender.com/films/${films.id}`,{
        method:"DELETE"
    })
    .then(res=>res.json)
  }