import React from 'react'
import Button from './Button'

const BlogItem=({onDelete, onUpdate,  blog : {title,author,subject, article, objectId}})=> {
    return(
       
            <div  className="ui card" style={{width:'75%', padding:'20px'}}>
    <div className="content">
<div className="header">{title}</div>

<br />
    <div className="meta">Author: {author}</div>
    <div className="meta"> Subject: {subject}</div>
<hr />
<div className="description"> {article}</div>

<Button className="ui primary button" style={{ margin:'10px 15px'}} onClick={()=>{
return onDelete(objectId)
}}>Delete</Button>
<Button className="ui green button" style={{ margin:'10px 15px'}} onClick={()=>{
return onUpdate(objectId)
}}>Update ID</Button>
</div> 
</div>

    )
}

export default BlogItem