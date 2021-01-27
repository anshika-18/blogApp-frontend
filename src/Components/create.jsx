import React from 'react'
//import Blogs from './Blogs'
import CreateBlog from './createBlog'

import './css/create.css'
function Create(){
    return(
        <div className="create-outer">
                <div ><CreateBlog/></div>
                <div >
                    <img src="http://pluspng.com/img-png/png-writing-kids-kids-learning-transparent-background-482.png" alt="a girl"></img></div>
        </div>
    )
}
export default Create;