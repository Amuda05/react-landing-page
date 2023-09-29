import React from 'react'

const Section = () => {
  return (
   <>
    <div className="chose">
        <div className="flex">
        <h2>Why you should choose us</h2>
          <p>Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for <br />  background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for  <br />background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background</p>
          <p>Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for <br />  background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for  <br />background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background</p>
        </div>

        <div className="images">
             <img src="/src/assets/art1.png" alt="" />
              <img src="/src/assets/art2.png" alt="" />
        </div>
      </div>



      <div className="chos">
        <div className="imags">
        <h2 className='why'>Why you should choose us</h2>
        <img src="/src/assets/flowerimg.png" alt="" />
        </div>

        <div className="fle">
          <h2 className='sub'>Subheader</h2>
        <p>Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for <br />  background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for  <br />background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background</p>
          <p className='pp'>Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for <br />  background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background applications, is <br /> refined by Ant UED Team. Ant Design, a design language for  <br />background applications, is refined by Ant <br /> UED Team. Ant Design, a design language for background</p>  
        </div>
      </div>


       <div className="imagess">
        <div className="imgs">
          <img  className='hand' src="/src/assets/handsdown.png" alt="" />
        </div>
        <div className="ims">
          <img src="/src/assets/cameraimg.png" alt="" />
          <img src="/src/assets/secondimg.png" alt="" />
          <img src="/src/assets/thirdimg.png" alt="" />
          <img src="/src/assets/fourthimg.png" alt="" />
        </div>
       </div>
      

      <div className="meet">
        <h3>Meet the team</h3>
        <p>Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
          <br />
          applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a
          <br />
          design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background
        </p>
            <div className="gallery">
        <div className="avatar">
          <img src="/src/assets/Avatar image1.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>

        <div className="avatar">
          <img src="/src/assets/Avatar image2.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>

        <div className="avatar">
          <img src="/src/assets/Avatar image3.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
        <div className="avatar">
          <img src="/src/assets/Avatar image4.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
        <div className="avatar">
          <img src="/src/assets/Avatar image5.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
      
        <div className="avatar">
          <img src="/src/assets/Avatar image6.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
        <div className="avatar">
          <img src="/src/assets/Avatar image7.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
        <div className="avatar">
          <img src="/src/assets/Avatar image8.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
        <div className="avatar">
          <img src="/src/assets/Avatar image9.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
        <div className="avatar">
          <img src="/src/assets/Avatar image10.png" alt="" />
          <p>Header</p>
          <p>Caption</p>
        </div>
        </div>
      </div>


      <div className="phone">
        <img src="/src/assets/phone-interface.png" alt="" />

        <div className="form">
          <h3>Contact us</h3>
          <p>Our lovely team would love to hear from you</p>

          <div className="input">
          <div className="form-input">
            <span>First Name</span>
            <br />
            <input type="text" placeholder='Firstname' />
          </div>
          
          <div className="form-input">
            <span>Last Name</span>
            <br />
            <input type="text" placeholder='lastname' />
          </div>


          <div className="form-input">
            <span className='one'>Email</span>
            <br />
            <input className='email' type="email" placeholder='email' />
          </div>
          
          <div className="form-input">
            <span className='one'>Phone Number</span>
            <br />
            <input className='email' type="text" placeholder='phonenumber' />
          </div>
                <div className="issue">
          <span>issue</span>
          <br />
          <input type="text"  placeholder='issue'/>
          </div>
          </div>
                  <div className="bnt">
           <button>Sumbit <img src="/src/assets/submitvector.png" alt="" /></button>
           </div>

           <div className="browser">
          <img src="/src/assets/googlevector.png" alt="" />
          <img src="/src/assets/playvector.png" alt="" />
        </div>
        </div>
      </div>
   
   </>
  )
}

export default Section