import { useState } from "react"
import {Link,useLocation} from "react-router-dom"


const Navbar=()=>{
    const location = useLocation();
    console.log(location.pathname);
    const [activeId,setActiveId] = useState(location.pathname)

return(
    <div className="bg-slate-950 h-screen w-1/5 flex flex-col text-white pt-24" >
        <Link to="/" className="pb-5 text-lg font-mono p-3 pl-5" style={{backgroundColor:activeId==="/" ? "#334155":"transparent"}}>Home</Link>
        <Link to="/information"  className="pb-5 text-lg font-mono p-3 pl-5" style={{backgroundColor:activeId==="/information" ? "#334155":"transparent"}}>Information</Link>
        <Link to="/guide"  className="pb-5 text-lg font-mono p-3 pl-5" style={{backgroundColor:activeId==="/guide" ? "#334155":"transparent"}}>Guide</Link>
        <Link to="/contact"  className="pb-5 text-lg font-mono p-3 pl-5" style={{backgroundColor:activeId==="/contact" ? "#334155":"transparent"}}>Contact</Link>

    </div>
)
}
export default Navbar