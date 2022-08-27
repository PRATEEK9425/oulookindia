
function navbar() {
  return `<div id="dibyanshu_navbar">

  <!-- TOP PART AUTOMATIC SLIDE SHOW----------------------------------->

  <div class="slideshow-container">

      <div class="mySlides fade">
          <img src="https://tpc.googlesyndication.com/simgad/7117080034950156774" class="im">

      </div>

      <div class="mySlides fade">

          <img src="https://tpc.googlesyndication.com/simgad/7117080034950156774" class="im">

      </div>

      <div class="mySlides fade">

          <img src="https://zfund-data-storage.s3.ap-south-1.amazonaws.com/1629788756626" class="im">


      </div>

  </div>
  <br>
  <!-- <!-^^^TOP PART AUTOMATIC SLID SHOW----------------------------------->
  <div id="point">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
  </div>

  <!-- SECOND PART DATE TIME AND SOCIAL MEDIA ICONS-------------------->
  <div id="datesmallicon">

      <!-- DATE AND TIME DIV----------------------------------->
      <div id="date"></div>


      <!-- SPACE BALANCE EMPTY DIV------------------------------>
      <div></div>


      <!-- SOCIAL MEDIA DIV-------------------------------------->
      <div id="smallicon">
          <div><a href="https://www.facebook.com/"> <img
              src="https://www.outlookindia.com/images/home_new_v4/facebook_top.svg" alt=""> </a></div>
           
            <div> <a href="https://twitter.com/i/flow/login"> <img
            src="https://www.outlookindia.com/images/home_new_v4/twitter_top.svg" alt=""></a></div>
           
            <div><a href="https://www.instagram.com/"> <img
            src="https://www.outlookindia.com/images/home_new_v4/instagram_top.svg" alt=""> </a></div>
           
            <div><a href="https://www.youtube.com/"> <img
            src="https://www.outlookindia.com/images/home_new_v4/youtube_top.svg" alt=""> </a></div>
      </div>


  </div>
  <!-- WEBSITE LOGO ------------------------------------------>
  <div id="Dib_logo">
      <a href="index-nav.html"><img
              src="https://imgnew.outlookindia.com/public/uploads/articles/2020/4/14/Outlook.jpg" alt=""></a>

      <button><a href="login.html">LOGIN | SUBSCRIBE</a></button>
  </div>

</div>
<!--^^NAVBAR SECTIONS-------------------------------------------->
<div id="navsections">
  <div> <a href="index.html">HOME </a></div>
  <div><a href="index.html">OUTLOOK </a></div>
  <div><a href="bussiness.html">BUSINESS</a></div>
  <div><a href="cryptocorner.html">MONEY</a></div>
  <div><a href="cryptocorner.html">CRYPTO CORNER</a></div>
  <div><a href="travel.html">TRAVEL</a></div>
  <div><a href="sports.html">SPORTS</a></div>
  <div><a href="videos.html">VIDEOS </a></div>
  <div><a href="entertainment.html">ENTERTAINMENT</a></div>
  <div><a href="photos.html">PHOTOS</a></div>
  <div><a href="">MAGAZINE</a></div>
  <div><a href="esj.html">ESG BHARAT</a></div>
  <div><a href="">OTHERS</a></div>
  <div><a href="agri.html">AGRITECH</a></div>

</div>
<!--HR TAG-------------------------------------------------------->
<hr id="dibyanshu_hr">`


}



function date() {
  return Date()
}

function footer(){
  return` <div id="bigfooter">
                    
  <div>
      <h3>Main Stories</h3>
      <hr class="bigfoothr">
      <ul>
          <li><a href="">MAGAZINE</a></li>
          <li><a href="">NATIONAL</a></li>
          <li><a href="">INTERNATIONAL</a></li>
          <li><a href="">BUSINESS</a></li>
          <li><a href="">OPINIONS</a></li>
          <li><a href="">BOOK REVIES </a></li>
          <li><a href="">THE NEWS  </a></li>
          <li><a href="">SPORTS </a></li>
          <li><a href="">ART & ENTERTAINMENT</a></li>
      </ul>
  </div>
  
  <div>
      <h3>Traveller</h3>
      <hr class="bigfoothr">
      <ul>
          <li><a href="">TRAVELOGUES</a></li>
          <li><a href="">WEEKENDS BREAKS</a></li>
          <li><a href="">HOLIDAYS WITH OT</a></li>
          <li><a href="">PHOTO FEATURES</a></li>
          <li><a href="">HOTELS </a></li>
          <li><a href="">GUIDEBOOKS</a></li> 
      </ul>
  </div>

  <div>
      <h3>Money</h3>
      <hr class="bigfoothr">
      <ul>
          <li><a href="">Mutual Funds</a></li>
          <li><a href="">Insurance</a></li>
          <li><a href="">Enquity</a></li>
          <li><a href="">Fixed Assets</a></li>
          <li><a href="">Banking </a></li>
          <li><a href="">ASK</a></li>
      </ul>
  </div>

  <div>
      <h3>Business</h3>
      <hr class="bigfoothr">
      <ul>
          <li><a href="">THE BIG STORY</a></li>
          <li><a href="">SPECIALS</a></li>
          <li><a href="">PERSPECTIVE</a></li>
          <li><a href="">PIX STORY</a></li>
          <li><a href="">ENTERPRISE</a></li>
          <li><a href="">STRATEGY</a></li>
          <li><a href="">MARKETS</a></li>
          <li><a href="">CEST LA VIE</a></li>
         
      </ul>
  </div>

  <div>
      <h3>Social Media</h3>
      <hr class="bigfoothr">
      <ul>
          <li><a href="">Facebook </a></li>
          <li><a href="">Twitter </a></li>
          <li><a href="">Instagram </a></li>
          <li><a href="">Youtube </a></li>     
      </ul>
  </div>
  
</div>



<div id="smallfooter">
  <div>
      <a href="">About Us</a>
      <a href="">Contact Us</a>
      <a href="">Subscribe</a>
      <a href="">Copyright & Disclaimer</a>
      <a href="">Osm Awards</a>
      <a href="">Compliences</a>
      <a href="">Poshan</a>
  </div>

        <div id="link">
        <a href="">@2022 Outlook Publishing India Pvt.Ltd</a>
       </div>
</div>`
}


export {navbar,date,footer}

  // export default navbar






