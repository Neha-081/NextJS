import Link from "next/link";


const UserMainPage=(props)=>{
    console.log(props);
    return (
    <div>
<h1>Users</h1>
{props.users.map((user)=><li key={user}>
    <Link href={`/userlist/${user}`}>{user}</Link>
    
    </li>)}

    </div>
    )
    }

export const getStaticProps=async()=>{
    return{
        props:{
            users:["1","2","3","4","5"],
        },
        notFound:false
    }
}

export default UserMainPage