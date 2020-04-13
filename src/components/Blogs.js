import React  from 'react'
import {searchIt} from '../services/search';
import BlogItem from '../components/BlogItem'

const Blogs = (props) => {
    return (
        <div>
            {props.blogs
            .filter(searchIt(props.searchTerm))
            .map((blog,idx)=>{
    return(
        <BlogItem  key={blog.objectId} onDelete={props.onDelete} onUpdate={props.onUpdate} blog={blog} />

    )
    })}
</div>
        )
    }

    


// let blogs = [
//     {
//       title: 'Is Ebola Worse?',
//       author: 'John Peters',
//       subject: 'news',
//       article:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
//       objectId: '1'
//     },
//     {
//       title: 'What to do in isolation',
//       author: 'Wanda Simon',
//       subject: 'news',
//       article:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
//       objectId: '2'
//     },
//     {
//       title: 'My Plants are Dying',
//       author: 'Lucy Grand',
//       subject: 'outdoors',
//       article:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
//       objectId: '3'
//     },
//     {
//       title: 'Stuck in A Room',
//       author: 'Burke Ginsen',
//       subject: 'news',
//       article:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
//       objectId: '4'
//     },
//     {
//       title: 'Outside My Window',
//       author: 'Laura Nivers',
//       subject: 'outdoors',
//       article:
//         'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis labore vel officiis magnam, molestiae aspernatur quasi culpa iure alias quod atque sequi repellat corrupti cupiditate nulla autem? Delectus, sequi placeat.',
//       objectId: '5'
//     }
//     ];

//     // function searchIt(term){
//     //     return function (item){
//     //         return item.subject.toLowerCase().includes(term.toLowerCase())
//     //     };
//     // };
// let searchIt = term => item => item.subject.toLowerCase().includes(term.toLowerCase());


// class Blog extends Component {
//     // state={blogs}
//     constructor(){
//         super()
//         this.state = {
//             blogs,
//             searchTerm: '',

//         };
//         this.onDelete = this.onDelete.bind(this);
    
//     }

//     onDelete(id){
//         const updatedBlogs = this.state.blogs.filter((item => item.objectId !== id));
//         this.setState({blogs:updatedBlogs});
//     }
//     handleChange = (event) => {
//         this.setState({searchTerm:event.target.value}, ()=> {
//             console.log(this.state.searchTerm)
//         })
        
//     }

//     render () {
        
//         return (
// <div style={{
//     marginTop:'100px',
//     display:'flex', 
//     justifyContent:'center', 
//     alignItems: 'center', 
//     flexDirection:'column'
// }}>
// <form className="ui form">
//     <div className="field">
// <input onChange={this.handleChange}
// type="text" placeholder="Search..."
// value={this.state.searchTerm}/>

//     </div>


// </form>


//     {this.state.blogs.filter(searchIt(this.state.searchTerm)).map((blog,idx)=>{
//     return(
// <div  className="ui card" style={{width:'75%', padding:'20px'}}>
//     <div className="content">
// <div className="header">{blog.title}</div>

// <br />
//     <div className="meta">Author: {blog.author}</div>
//     <div className="meta"> Subject: {blog.subject}</div>
// <hr />
// <div className="description"> {blog.article}</div>
// <h3>index: {idx + 1} objectId: {blog.objectId}</h3>
// <button className="ui primary button" style={{ margin:'10px 15px'}} onClick={()=>{
// return this.onDelete(blog.objectId)
// }}>Delete</button>
// </div> 
// </div>
//     )
//     })}
// </div>
//         )
//     }
// }

export default Blogs