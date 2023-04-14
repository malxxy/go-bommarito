// import { useQuery } from '@apollo/client';
// import { QUERY_BLOGS, QUERY_SINGLE_PROFILE, QUERY_BLOGS, QUERY_SINGLE_BLOG } from '../../utils/queries';
// import adminLayout from '../../components/adminLayout';
// // import ant design

// The content

// display either drafted blog post or published

// drafted
// table title: Drafted blog posts
// table content
// GET all blogs with draft id
// list blog title, description, and author
// edit button to take you to editblog page

// published
// table title: Published blog posts
// table content
// GET all blogs with published id
// list blog title, description, and author
// edit button to take you to editblog page

// editBlog
import EditBlog from "../componentsAdmin/editBlog";
import '../styles/output.css';
// import Published from "../componentsAdmin/published";

function Posts() {
    return (
            <div class="flex ...">
                <div class="flex-none w-14 h-14 ...">
                    
                </div>
                <div class="grow h-14 ...">
                    <EditBlog />
                </div>
                <div class="flex-none w-14 h-14 ...">
                    
                </div>
            </div>
    )
}

export default Posts;