import EditBlog from "../componentsAdmin/editBlog";
import Published from "../componentsAdmin/published";
import Drafts from "../componentsAdmin/drafts";
import '../styles/output.css';

function Posts() {
    return (
            <div className="mt-10 flex ...">
                <div className="flex-none w-14 h-14 ...">
                    
                </div>
                <div className="grow h-14 ...">
                    <EditBlog />
                    <Published />
                    <Drafts />
                </div>
                <div className="flex-none w-14 h-14 ...">
                    
                </div>
            </div>
    )
}

export default Posts;