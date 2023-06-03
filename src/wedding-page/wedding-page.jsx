import './wedding-page.css'
const WeddingPage = () => {
return(
<div>
<div className="container">

  <div className="navigation-bar">


    <div id="navigation-container">

<img src="https://image.ibb.co/khiSCk/logosmall.png" alt="logosmall" border="0" />
      
      <ul>
      
      </ul>
    </div>
  </div>
    
</div>
    
    <div className="biglogo">
    <h3>are getting <span className="yellowhighlight">married</span></h3>
    <div className="text-name">Doron & Stasea</div>
    <div className="text-date">22 Oct 2023</div>
      <div className="empty-div"></div>
       <div className="wrapper">
      <div></div>
      <div>
      <div className="wrapper-name-guest">
           
           <div >
               <input />
           </div>
           <div className=" text-guest">
          : שם האורח 
           </div>
         
       </div>
       <div className="wrapper-name-guest">
       <select id='number-dd' name='number'>
        <option value='0'>0</option>
        <option value='one'>1</option>
        <option value='two'>2</option>
        <option value='three'>3</option>
        <option value='four'>4</option>
        <option value='five'>5</option>
        <option value='six'>6</option>
        <option value='seven'>7</option>
        <option value='eight'>8</option>
        <option value='nine'>9</option>
        <option value='ten'>10</option>

    </select>
           <div className=" text-guest">
          : מספר האורחים
           </div>
         
       </div>
       <a href="#" className="button">אישור הגעה </a>
      </div>
      <div></div>
    </div>

    </div>
 
    
    <div className="row">
  <div className="col"><div className="icon-calendar"></div>
  <h1>22 oct 2023</h1>
  <h2>19:00 pm</h2>
   </div>

    {/* <div className="col">
        <div>
           
            <div className="inline-block">
                <input />
            </div>
            <div className="inline-block">
           : שם האורח 
            </div>
          
        </div>
        <a href="#" className="button">אישור הגעה </a>

</div> */}
  <div className="col"><div className="icon-map-marker"></div>
  <h1>Basico </h1>
  <h2>Nes Ziyona</h2></div>
</div>
</div>
)
}

export default WeddingPage