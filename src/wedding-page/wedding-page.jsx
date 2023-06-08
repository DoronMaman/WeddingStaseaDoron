import './wedding-page.css';
import React, { useState } from 'react';
const WeddingPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [val, setVal] = useState("");
  const onOpenDailog = (value) => setOpenForm(value)

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setVal(e.target.value);
    }
  };

return(
<div>
<div className=   {  (openForm ? 'container size-container-after':'container size-container-before')}>

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
      <div className="empty-div">
      {openForm ? null :<a onClick={()=>onOpenDailog(true)} className="buttonOpenForm">אישור הגעה </a>}

      </div>
      {openForm ? 
      <div>
       <div className="wrapper">
      <div>
      <div className="col"><div className="icon-calendar"></div>
  <h1>22 oct 2023</h1>
  <h2>19:00 pm</h2>
   </div>
      </div>
      <div>
      <form className="form page__form" action="javascript:void(0);" method="POST">
    <div className="form__linput">
      <input className="form__input" type="text" name="fname" id="fname" pattern="\w{1,}" required />
      <label className="form__label" for="fname">שם האורח</label>
    </div>

    <div className="form__linput">
      <input className="form__input"
        name="lname"
         id="lname"
         type="number"
         value={val}
         onChange={handleChange} 
           required />
      <label className="form__label" for="lname">מספר האורחים</label>
    </div>
  </form>
      {/* <div className="wrapper-name-guest" >
           
           <div >
               <input className="input-name" type="text" placeholder="שם האורח" />

           </div>
         
         
       </div>
       <div className="wrapper-name-guest">
       <select id='number-dd' name='number'>
       <option value='none' disabled selected hidden>מספר אורחים</option>
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
       
         
       </div> */}
      </div>
      <div>
      <div className="col"><div className="icon-map-marker"></div>
  <h1>Basico </h1>
  <h2>Nes Ziyona</h2></div>
      </div>
    </div>
    <a onClick={()=>onOpenDailog( false)} className="button">💍 מגיעים </a></div> :null
      }
    </div>
 
    
    <div className="row">
  {/* <div className="col"><div className="icon-calendar"></div>
  <h1>22 oct 2023</h1>
  <h2>19:00 pm</h2>
   </div> */}

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
  {/* <div className="col"><div className="icon-map-marker"></div>
  <h1>Basico </h1>
  <h2>Nes Ziyona</h2></div> */}
</div>
{/* {openForm ? null :<a onClick={()=>onOpenDailog(true)} className="buttonOpenForm">אישור הגעה </a>} */}

</div>
)
}

export default WeddingPage