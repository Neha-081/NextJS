import { withRouter } from "next/router"

const fullStack=(props)=>{
    console.log(props);
   return (<div>
<p>full Stack </p>
    </div>)
}

export default withRouter(fullStack)