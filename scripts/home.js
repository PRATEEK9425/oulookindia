let middlearr=[
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1660984130.webp",
    "title": "Cryptocurrency Prices Today: Bitcoin and Ethereum Down, QLC Chain (QLC) Most Trending Crypto",
    "description": "Globally, consumers and developers want to buy and build non-fungible tokens on energy-efficient sustainable Blockchains; minting one NFT on Ethereum Blockchain consumes more energy than what an average US household consumes in a week. Consumers are also looking for NFTs of physical objects in future.",
    "date": "2022-08-24"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/Bitcoin__1661168353.webp",
    "title": "Ronin Hackers Moved Stolen $625-Mln Cryptos To Bitcoin Network Through Sanctioned Mixers",
    "description": "Hackers were using sanctioned crypto mixers and Ren Bridge to convert stolen ETH and USDC into BTC",
    "date": "2022-08-24"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/crypto7_1642059121.jpg",
    "title": "Ronin Hackers Moved Stolen $625-Mln Cryptos To Bitcoin Network Through Sanctioned Mixers",
    "description": "Hackers were using sanctioned crypto mixers and Ren Bridge to convert stolen ETH and USDC into BTC",
    "date": "2022-08-24"
    },
      {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1660103353.webp",
    "title": "Is Decentralized Finance Safer Than Centralized Finance? The Crypto Debate Rages On",
    "description": "A lot of centralized finance platforms are going bankrupt. So, is investing in decentralized finance protocols safer than centralized finance platforms? We look at the pros and cons as the debate rages on among crypto enthusiasts",
    "date": "2022-08-24"
    },

]




let culturearr=[
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661222047.webp",
    "title": "Poems On Karma, Dhamma, And Friendship",
    "description": "Poet and short story writer Shirani Rajapakse from Sri Lanka writes seven poems on karma, dhamma, and friendship among other subjects.",
    "date": "2022-08-24"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661078257.webp",
    "title": "Remembering Ismat Chughtai On Her 107th Birth Anniversary",
    "description": "The writer reflects on the importance of remembering Ismat Chughtai on her 107th birth anniversary for her definitive and timeless style of writing, and her...",
    "date": "2022-08-24"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661063534.webp",
    "title": "Fondling Your Own Soul",
    "description": "Bring me that childhood, the poet demands. Don't we all desire that period of time to wipe out the sour taste of life?",
    "date": "2022-08-24"
    },
      {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661062261.webp",
    "title": "Heart Beats Like Oars",
    "description": "English is my foreign father tongue.’ The author seeks the DNA of our languages and histories.",
    "date": "2022-08-24"
    },

]


let worldarr=[
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661307980.webp",
    "title": "Sunflower For Solidarity: UK Decorates Downing Street Office Entrance With Ukraine's National Flower",
    "description": "The outgoing UK leader Boris Johnson created an arch of sunflowers — Ukraine's national flower — outside his Downing Street office to commemorate the eastern European nation's independence day on...",
    "date": "2022-08-24"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661308814.webp",
    "title": "Philippines: Tropical Storm Ma-on Leaves 3 Injured, Thousands Displaced",
    "description": "Tropical Storm Ma-on weakened slightly after barrelling across mountainous northern provinces then exited overnight with sustained winds of 95 kilometers per hour and gusts of up to 115 kph after making landfall in Maconacon town in Isabela province Tuesday morning, forecasters said.",
    "date": "2022-08-24"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661320025.webp",
    "title": "US To Give Ukraine USD 3 Billion In Military Aid For Years Ahead",
    "description": "Officials said it will include money for the small, hand-launched Puma drones, the longer-endurance Scan Eagle surveillance drones, which are launched by catapult, and, for the first time, the British Vampire drone system, which can be launched off ships. ",
    "date": "2022-08-24"
    },
      {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_2/IMAGE_1661324230.webp",
    "title": "US Airstrikes Target Militia-controlled Areas In East Syria",
    "description": "Opposition war monitor the Syrian Observatory for Human Rights and activist collective Deir Ezzor 24 said the airstrikes targeted the Ayash Camp run by the Fatimiyoun group made up of Shiite fighters from Afghanistan. The war monitor reported that at least six Syrian and foreign militants were killed in the airstrikes.",
    "date": "2022-08-24"
    },

]



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

    let cont1 = document.getElementById("middle")
append(middlearr,cont1)

let cont3 = document.getElementById("culture_society")
append(culturearr,cont3)

let cont2 = document.getElementById("world")
append(worldarr,cont2)



// navbar and footer importing
import {navbar,date,footer} from "../EXPORT_HUB/navbar.js";    
console.log(navbar);
// console.log(date)
document.getElementById("navabars").innerHTML = navbar()
document.getElementById("date").innerHTML=date()
document.getElementById("footersection").innerHTML=footer()

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); 
}

// ---------------------------------------function for slide show