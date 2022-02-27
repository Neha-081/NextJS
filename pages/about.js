import { withRouter } from "next/router"

const AboutPage=(props)=>{
    const router=useRouter()
    return (
        <div>
            <p>About Page</p>
            <button onClick={()=>props.router.push("/")}>Go To Home</button>
        </div>
    )
}
export default withRouter(AboutPage)


//OR------------------

import { useRouter } from "next/router"

// const AboutPage=()=>{
//     const router=useRouter()
//     return (
//         <div>
//             <p>About Page</p>
//             <button onClick={()=>router.push("/")}>Go To Home</button>
//         </div>
//     )
// }
// export default AboutPage