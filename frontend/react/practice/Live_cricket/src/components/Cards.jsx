
const Cards =({data})=>{
 return(
           data.map((currval) => {
            if(currval.status === "Match not started" || currval.status === "Match not in progress") {
                return null;
            }
            else{
            
            return (
                <div key={currval.id} className="ml-5 flex-row rounded-xl  h-80 w-96 mt-4 bg-white" >
                    <h3 className="text-center font-bold mt-4 mb-2" >{currval.series}</h3>
                    <h3 className="text-center font-bold mb-4">{currval.matchType}</h3>
                    <div className="teams flex align-middle text-center mt-14 justify-around">
                    <div className="img mb-5 ">
                        <img className="ml-10 " src={currval.t1img} alt={currval.t1} />
                        <p >{currval.t1}</p>
                        <p>{currval.t1s}</p>
                    </div>
                    <div className="img">
                        <img className="ml-10" src={currval.t2img} alt={currval.t2} />
                        <p>{currval.t2}</p>
                        <p>{currval.t2s}</p>
                    </div>
                    </div>
                    <p className="mt-4 text-center">status: {currval.status}</p>
                </div>
            );}
        })

 )
 
}
export default Cards;