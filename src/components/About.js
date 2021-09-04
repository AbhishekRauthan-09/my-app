import React, {useState} from 'react'


const About = () => {

  const [myStyle, setMystyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  })

  const btnstyle = {
    padding:10
  }

  const [text, settext] = useState('Disable');
    const toggleStyle = ()=>{
      console.log("clicked");
      if(myStyle.color === 'white'){
      console.log("clicked if");

      setMystyle({
      color: 'black',
      backgroundColor: 'white',
      // Border; ‘1px solid white’
      })
      settext("Enable")
      // setBtnText(“Enable Light Mode”)}
    }

    else{
      console.log("clicked else");

      setMystyle({

      color: 'white',
      backgroundColor: 'black'})
      // Set BtnText(“Enable Dark Mode”)}
      settext("Disable")
    }

    }
  return (
        <div className="container my-4" style={myStyle}>
          <h1 className = "my6">About us</h1>
            <div className="accordion" id="accordionExample" >
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Accordion Item #1
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Accordion Item #2
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Accordion Item #3
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
  </div>
</div>

      <div className="container my-3" style = {btnstyle}>
      <button onClick={toggleStyle} type="button" className="btn btn-primary" >{text}</button>

      </div>
        </div>
    );
}


export default About;