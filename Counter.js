import {usestate,useEffect} from "react";
function Counter(){
    const [count,set count]=usestate{0};
    const[calculation,setCalculation]=useState{0};
    useEffect()=>{
        setCalculation(()=>count*2);
    },[count];
    return(
        <>
        <p>Count:{count}</p>
        <p>Calculation:{Calculation}</p>
        </>
    );
}
export default Counter;