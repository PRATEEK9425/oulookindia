let entergridarr = [
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661508296.webp",
        "title": "‘Liger’ Box Office Collection Day 1: Vijay Deverakonda And Ananya Panday’s Film Mints Rs 33.12 Crore Worldwide On Opening Day",
        "description": "Vijay Deverakonda's film might not have managed to wow the audience and the critics, but collected decent numbers at the box office on day 1.",
        "date": "26 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661506994.webp",
        "title": "Mahesh Manjrekar Says 'Ek Kale Che Mani' Is About Clash Of Values",
        "description": "Senior actor-director Mahesh Manjrekar, who has produced the upcoming Marathi web-show 'Ek kale Che Mani', has said that the show is a take on the young generation, which believes in charting its own course.",
        "date": "26 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661512238.webp",
        "title": "Rakul Preet Singh: Akshay's Energy On Set Is To Bring Everyone Together",
        "description": "Pop punk star Avril Lavigne will be honoured with a star on the Hollywood Walk of Fame.",
        "date": "26 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661507603.webp",
        "title": "Cryptocurrency Prices Today: ETH Rebounds, Trading Above $1,600, BTC Gains 1%",
        "description": "Bitcoin (BTC) rose 1.01 per cent to $21,485, while Ethereum (ETH) was up 3.05 per cent to $1,620 on Tuesday evening.",
        "date": "23 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661506684.webp",
        "title": "Edelweiss Partners With Ayushman Bharat Digital Mission To Generate ABHA Number",
        "description": "This partnership is aimed at empowering and enabling the people to access medical diagnosis, treatment, and financing from verified healthcare providers and payers, seamlessly across India",
        "date": "23 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661504841.webp",
        "title": "Adani Entities Make Open Offer For 26% Stake In NDTV ",
        "description": "Adani entities after the open offer will have controlling stake in NDTV said sources close to the deal",
        "date": "23 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1660116395.webp",
        "title": "Muted Early Response To 'Liger' Casts An Unsettling Shadow On Film",
        "description": "The long wait finally ended on Thursday as 'Liger' hit the screens after an intensive country-wide promotion tour and publicity blitzkrieg.",
        "date": "23 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661508296.webp",
        "title": "‘Liger’ Box Office Collection Day 1: Vijay Deverakonda And Ananya Panday’s Film Mints Rs 33.12 Crore Worldwide On Opening Day",
        "description": "The key indices opened lower due to losses in IT and FMCG shares as uncertainty prevailed over the interest rate hikes by the US Federal Reserve to control inflation",
        "date": "23 August 2022"
    },
    {
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_1/IMAGE_1661506994.webp",
        "title": "Entities Can Make Overseas Investment Beyond Prescribed Limit In Strategic Sectors: Finance Ministry",
        "description": "The earlier regime did not permit Overseas Direct Investment by a non-financial sector Indian entity into a foreign firm engaged in financial services activity",
        "date": "23 August 2022"
    },

]




append(entergridarr)
function append(data) {

    data.forEach(function (el) {
        let econt1 = document.getElementById("eupper")
        let image = document.createElement("img")
        image.setAttribute("id", "ehomepic")
        image.src = el.image

        let title = document.createElement("p")
        title.innerText = el.title
        title.setAttribute("class", "ehometitle")
        let description = document.createElement("p")
        description.innerText = el.description
        description.setAttribute("class", "edescription");
        let date = document.createElement("h2")
        date.innerText = el.date
        date.setAttribute("class", "edate")
        let div = document.createElement("div")
        div.setAttribute("class", "ehomeenter")
        div.append(image, title, description, date)
        econt1.append(div)
    })

}


let enterbelowarr = [
    {
        "date": "26 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1661504841.webp",
        "title": "Jason Momoa Credits Tom Cruise For Making Going To Cinemas Appealing Post Pandemic",
        "description": "Actor Jason Momoa has thanked 'Top Gun: Maverick' star Tom Cruise for his part in making people go to theatres again following lukewarm years because of the...",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/Silver_ETFs_1642494376.jpg",
        "title": "Edelweiss Asset Management Launches Gold And Silver ETF Fund Of Fund; NFO Closes On Sept 7",
        "description": "Edelweiss Asset Management Limited launches a new open-ended fund of funds Edelweiss Gold and Silver ETF focused on precious metals",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1661259738.webp",
        "title": "Demand For Holistic Healthcare Products Jumps 50%, Says Employee Insurance Firm Plum",
        "description": "Health insurance today comes with additional benefits like discounted medicines, teleconsultation with doctors, etc., providing a holistic approach to...",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1661139622.webp",
        "title": "Cryptocurrency Prices Today: ETH Up 2% As Altcoins Rally, BTC Trades Flat",
        "description": "Bitcoin (BTC) fell 0.09 per cent to $21,358, while Ethereum (ETH) was up 2.16 per cent to $1,640 on Wednesday evening",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/Sensex.__1654236033.webp",
        "title": "Markets Settle With Modest Gains In Highly Volatile Trade",
        "description": "In a trade marked with highs and lows, the 30-share BSE Sensex climbed 54.13 points or 0.09 per cent to settle at 59,085.43. During the day, it hit a high of...",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1661326593.webp",
        "title": "DreamFolks IPO Fully Subscribed Within Hours Of Opening",
        "description": "The category for Retail Individual Investors (RIIs) received 5.39 times subscription, while non-institutional investors portion got subscribed 41 per cent",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1657291037.webp",
        "title": "Bharat Biotech's Rotavac Introduced In Nigeria To Immunise Children From Diarrhoea",
        "description": "Nigeria currently accounts for 14 per cent of all childhood rotavirus deaths globally, making it the country with the second-highest number of rotavirus deaths...",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1642933701.jpg",
        "title": "Future Enterprises Faces Second Plea To Initiate Insolvency",
        "description": "The latest petition is filed against Future Enterprises by Retail Detailz India, claiming default of Rs 4.02 crore before the Mumbai bench of the National...",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/public/uploads/articles/2017/12/27/Webstory_12_20171227.jpg",
        "title": "Mercedes-Benz Expects 25% Of Sales In India From Electric Vehicles In Next 5 Years: Martin Schwenk",
        "description": "The company's Indian arm, Mercedes-Benz India will be launching three electric vehicles in the next four months as part of the strategy to accelerate its...",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1661326593.webp",
        "title": "Dreamfolks Services IPO: IPO Price Band, GMP, IPO Dates, Issue Size, Lot Size And Other Details Here",
        "description": "Dreamfolks Services IPO: At the upper end of the price band one lot of Dreamfolks Services shares will cost Rs 14,996",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1658203069.webp",
        "title": "India, Brazil Can Share Best Practices For Mutual Growth: S Jaishankar",
        "description": "Jaishankar is on an official visit to Brazil, Paraguay, and Argentina from August 22-27. This is his first-ever official visit to South America",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/public/uploads/articles/2017/12/19/ndtv-logo.jpg",
        "title": "NDTV Shares Hit 5% Upper Circuit After Adani Group Launches Bid To Take Over Company",
        "description": "The stock climbed 5 per cent to Rs 384.50 -- its upper circuit limit as well as 52-week high -- on the BSE after beginning the trade on a positive note",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1647669230.webp",
        "title": "No Evidence Of Indian Companies Circumventing Russian Sanctions: US Official",
        "description": 'I ve seen no evidence of Indian companies circumventing sanctions that have been placed on Russia, Adeyemo told reporters during a visit to IIT-Bombay',
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IMAGE_1645020939.jpg",
        "title": "Escalation Of Geopolitical Tensions Biggest Risk To India's Growth Outlook: RBI MPC Member Jayanth Varma",
        "description": "Varma, in an interview to PTI, said that inflation and inflationary expectations appear to be moderating and high inflation will certainly not become the...",
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/IT_Sector_1650624064.webp",
        "title": "Why Are Indian IT Companies Withholding Their Employee’s Variable Salary",
        "description": "Combating high attrition with pay hikes squeezed margins, forcing Infosys, Wipro and Tata Consultancy Services to take a hard look at their employees’..."
    },
    {
        "date": "24 August 2022",
        "image": "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_3/Sensex._1647922688.webp",
        "title": "Sensex, Nifty Edge Lower; Infosys, TCS, Hindustan Unilever Among Top Losers",
        "description": "Ten of 15 sector gauges compiled by the National Stock Exchange were trading lower led by the Nifty IT index's 0.5 per cent decline"
    },
]



append2(enterbelowarr)
function append2(data) {


    data.forEach(function (el) {
        let econt2 = document.getElementById("elower")
        let image = document.createElement("img")
        image.setAttribute("id", "ebusspic")
        image.src = el.image

        let title = document.createElement("p")
        title.innerText = el.title
        title.setAttribute("class", "ebusstitle")
        let description = document.createElement("p")
        description.setAttribute("class", "ebussdisc")
        description.innerText = el.description

        let date = document.createElement("p")

        date.innerText = el.date
        date.setAttribute("class", "ebussdate")
        let div = document.createElement("div")
        div.setAttribute("class", "ebuss")
        div.append(image, title, description, date)
        econt2.append(div)
    })

}







let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}


  
  


  