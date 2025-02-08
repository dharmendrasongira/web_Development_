function Random(){
    let number= Math.random();
    let rounded= Math.round(number*100);
    return(
        <p>the random no is : {rounded}</p>
    )
}
export default Random;