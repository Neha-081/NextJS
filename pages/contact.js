import { withRouter } from "next/router"
import { useRouter } from "next/router"
const ContactPage=(props)=>{
    const router=useRouter()
    return (
        <div>
    <h1 className="title">Welcome to Contact Page</h1>
    <button onClick={()=>props.router.push("/")} className="homebtn">Go To Home</button>
    </div>
    )
}

export default withRouter(ContactPage)