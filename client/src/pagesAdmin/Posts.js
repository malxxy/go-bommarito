import EditBlog from "../componentsAdmin/editBlog";
import Published from "../componentsAdmin/published";
import '../styles/output.css';

function Posts() {
    return (
            <div className="mt-10 flex ...">
                <div className="flex-none w-14 h-14 ..."></div>
                <div className="flex-grow max-w-75 h-14 ...">
                    <EditBlog />
                    <Published />
                </div>
                <div className="flex-none w-14 h-14 ..."></div>
            </div>
    )
}

export default Posts;