import { withRouter } from "next/router"

const usersDetail=(props)=>{
   const usersMap={
       "1":"Neha",
       "2":"Maya",
       "3":"Priya",
       "4":"sakshi",
       "5":"kiran"
   }
   if(typeof window==='undefined'){
       return <p>...Loading</p>
   }

   return (<div>
<p>Name :- {usersMap[props.router.query.id]} </p>
    </div>)
}

export default withRouter(usersDetail)


