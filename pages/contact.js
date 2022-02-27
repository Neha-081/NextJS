import { withRouter } from "next/router"
import { useRouter } from "next/router"
const ContactPage=(props)=>{
    const router=useRouter()
    return (
        <div>
    <p>Contact Page</p>
    <button onClick={()=>props.router.push("/")}>Go To Home</button>
    </div>
    )
}

export default withRouter(ContactPage)