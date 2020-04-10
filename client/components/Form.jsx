import React from 'react'
import { Link } from 'react-router-dom'

// const movie = MovieData.map(movie => {
//     movie.mood  
// })
// console.log(MovieData)

// class FormData extends React.Component {
//  constructor(props) {
//      super(props)
//      this.state = {
//          sad: '',
//          fun: '',
//          nostalgic: '',
//          weird: '',
//          schlocky: '',
//          intense: ''
//      } 
//  }
// }

// return <li key={id}><Link to={`/list/${rankKey}`}>{rankKey}</Link></li>
// <Link to={`/result/sad`}> 
const Form = () => {
    
    return (
        <form>
        <h3>What kind of mood are you in?</h3>
        <div className="formjsxDiv">
            <div className="formjsxButton">
                <Link  to='/Result/sad'>
                    <button className="buttonForm" >Sad</button>
                </Link>
                <Link  to='/Result/fun'>
                    <button className="buttonForm" >Fun</button>
                </Link>
                <Link  to='/Result/nostalgic'>
                    <button className="buttonForm">Nostalgic</button>
                </Link>
                <Link  to='/Result/schlocky'>
                    <button className="buttonForm">Schlocky</button>
                </Link>
                <Link  to='/Result/intense'>
                    <button className="buttonForm">Intense</button>
                </Link>        
            </div>
        </div>
        </form>
    )
}

//use a handle change, updates state everytime someone types

//each button will have a value,  when the button is clicked this will update/record the state, these values will already be in the state
//setState
//set that button info into a function

//filter out the mood that don't match false 

//You can pass an array into the value attribute, allowing you to select multiple options in a select tag:

//<select multiple={true} value={['sad', 'fun']}></select>


// class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
  
//     handleSubmit(event) {
//       alert('Your favorite flavor is: ' + this.state.value);
//       event.preventDefault();
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Pick your favorite flavor:
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Grapefruit</option>
//               <option value="lime">Lime</option>
//               <option value="coconut">Coconut</option>
//               <option value="mango">Mango</option>
//             </select>
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

export default Form