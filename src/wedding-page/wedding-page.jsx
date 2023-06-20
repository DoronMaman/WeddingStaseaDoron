import './wedding-page.css';
import React, { useState } from 'react';
const WeddingPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [val, setVal] = useState("");
  const [name, setName] = useState("");

  const onOpenDailog = (value) => setOpenForm(value)

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setVal(e.target.value);
     
    }
  };
  const handleChangeName = (e) => {

      setName(e.target.value);
     
    
  };

return(
<div >
<div className=   {  (openForm ? 'none  ':'container size-container-before ')}>

  <div className="navigation-bar">
  <div>
  <img src="https://image.ibb.co/khiSCk/logosmall.png" alt="logosmall" border="0" />
  {/* {openForm ? null :<a onClick={()=>onOpenDailog(true)} className="buttonOpenForm">אישור הגעה </a>} */}

      </div>

    {/* <div id="navigation-container">

<img src="https://image.ibb.co/khiSCk/logosmall.png" alt="logosmall" border="0" />



      <ul>

      </ul>
    </div> */}
    
  </div>

</div>
    
    <div className="biglogo">
    <h3>are getting <span className="yellowhighlight">married</span></h3>
    <div className="text-name">Doron & Stasea</div>
    <div className="text-date">22 Oct 2023</div>
      {openForm ? null :<a onClick={()=>onOpenDailog(true)} className="buttonOpenForm">אישור הגעה </a>}
      {/* {openForm ? null :<a onClick={()=>onOpenDailog(false)} className="buttonNotJoin">לא מגיעים </a>} */}


      {openForm ? 
      <div >
       <div className="wrapper">
      <div>
      <form className="form page__form" action="javascript:void(0);" method="POST">
 

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
    <div className="form__linput">
      <input className="form__input" type="text" name="fname" id="fname"
          value={name}
          onChange={handleChangeName} 
      pattern="\w{1,}" required />
      <label className="form__label" for="fname">שם האורח</label>
    </div>
  </form>
      </div>
      <div className="wrapper-buttons">
      <a onClick={()=>onOpenDailog( false)} className="button">💍 מגיעים </a>
      <a onClick={()=>onOpenDailog( false)} className="button"> לא מגיעים </a>

      </div>
   
      <div class="wrapper-place">
        
      
      <div>
      <div className="col"><div className="icon-calendar"></div>
  <h1>22 oct 2023</h1>
  <h2>19:30 pm</h2>
   </div>
     

      </div>
      <div>
      <div className="col"><div className="icon-map-marker"></div>
  <h1>Basico </h1>
  <h2>Nes Ziyona</h2></div>
      </div>
      </div>
    </div>
   </div> 
    :null
      }
    </div>
 
    
    <div className="row">

</div>

</div>
)
}

export default WeddingPage