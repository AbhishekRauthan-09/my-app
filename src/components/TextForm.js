import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted To uppercase!" , "success")
    }

    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }

    const handledownClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To Lowercase!" , "success")

    }

    // console.log(text)
    
    const handleReverse = () =>{

        function ReverseString(str) {
  
            if(!str || str.length < 2 || 
                    typeof str!== 'string') {
                return 'Not valid'; 
            }
              
            const revArray = [];
            const length = str.length - 1;
              
            for(let i = length; i >= 0; i--) {
                revArray.push(str[i]);
            }
              
            // Joining the array elements
            return revArray.join('');

        }

        let newText = ReverseString(text);
        setText(newText);
        props.showAlert("Printed from reverse!" , "success")

        
    }

    
    


    const [text , setText] = useState('');
    // text = "iheufh" -->wrong way to change text 
    
    return (
     <>
    <div className = "container" style={{color:props.mode==='dark'?'White':'black'}} >
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={text} style={{background:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'black'}} onChange= {handleOnChange}  id="my-box" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Change to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handledownClick}>Change to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleReverse}>print from back</button>

     </div>

     <div className="container " style={{color:props.mode==='dark'?'White':'black'}} >
            <h2>Your text here</h2>
            <p>{text.split(" ").length} words. and {text.length} characters</p>
            <p>{ 0.008 * text.split(" ").length} minutes to read</p>

            <h3>Preview</h3>
            <p>{text.length>0? text:"Enter something to preview it here"}</p>
     </div>
     </>
    )
}
