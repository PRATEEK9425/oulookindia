function append(data,cont){


    data.forEach(function(el){
    
    let image = document.createElement("img")
    image.setAttribute("id","homepic")
    image.src = el.image
    
    let title = document.createElement("h3")
    title.innerText = el.title
    title.setAttribute("class","hometitle")
    let description = document.createElement("p")
    description.innerText = el.description
    
    let date = document.createElement("h2")
    date.innerText = el.date
    
    let div = document.createElement("div")
    div.setAttribute("class" ,"homecypto")
    div.append(image,title,description,date)
    cont.append(div)
    })
    
    }



    export {append}