import Link from "next/link"
const HomePage=()=>
(
    <div>
<p>Home Page</p>
<Link href="/about">Go to About Page</Link>
<br/>
<Link href="/contact">Go to Contact Page</Link>
<br/>
<Link href="/usersList">Go to Users List</Link>
</div>
)
export default HomePage