import { withRouter } from "next/router"
import { useRouter } from "next/router"
const AboutPage=(props)=>{
    const router=useRouter()
    return (
        <div>
    <h1 className="title">Welcome to About Page</h1>
    <button onClick={()=>props.router.push("/")} className="homebtn">Go To Home</button>
    </div>
    )
}

export default withRouter(AboutPage)