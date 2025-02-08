/* eslint-disable react/prop-types */
const WelcomeMessage=({onGetPostClick})=>{
 return <><center>
 <h1 className="welcome">    There is no post till now</h1>
 <button type="button" onClick={onGetPostClick} className= "mb-3 btn btn-primary" >
    Get post from server
 </button>
 </center>
 
 </>
};
export default WelcomeMessage;