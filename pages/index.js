import Link from "next/link"

const HomePage=()=>
(
    <div>
<h1 className="title">Welcome to Home Page</h1>

<div className="btndiv">
<Link href="/contact"><button className="contactbtn">Go to Contact Page</button></Link>
<br/>
<Link href="/about"><button className="aboutbtn">Go to About Page</button></Link>
<br/>
<Link href="/usersList"><button className="usersbtn">Go to Users List Page</button></Link>
</div>
</div>
)
export default HomePage