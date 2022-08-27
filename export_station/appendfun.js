
// append for grid model
function append(data,cont){

    data.forEach(function(el){
    
    let image = document.createElement("img")
    image.setAttribute("id","pic")
    image.src = el.image
    
    let title = document.createElement("h3")
    title.innerText = el.title
    title.setAttribute("class","titlenews")
    let description = document.createElement("p")
    description.innerText = el.description
    
    let date = document.createElement("h2")
    date.innerText = el.date
    
    let box = document.createElement("div")
    box.setAttribute("class" ,"crptobox")
    box.append(image,title,description,date)
    cont.append(box)
    })
    
    }
// non grid export
function append2(data,cont){

    data.forEach(function(el){
    
    let image = document.createElement("img")
    image.setAttribute("id","midpic")
    image.src = el.image
    
    let title = document.createElement("h3")
    title.innerText = el.title
    title.setAttribute("class","midtitlenews")

    let description = document.createElement("p")
    description.innerText = el.description
    description.setAttribute("class","middledes")
    let date = document.createElement("h2")
    date.innerText = el.date
    date.setAttribute("id","middate")



    let box = document.createElement("div")
    box.setAttribute("class" ,"middlebox")
    box.append(image,title,description,date)
    cont.append(box)
    })
    
    }


export {append,append2}
