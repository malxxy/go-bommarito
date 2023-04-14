// admin nav from template
import '../styles/output.css';

function AdminNav () {
    return (
        <nav className="bg-mainBlue grid grid-cols-5 gap-4">
            <div>
                <a href="#Home">BrandImage</a>
            </div>
            <div className="grid-span-3"></div>
            <div className="grid-span-2">
                <a href="#Home">Home</a>
                <a href="#Posts">Posts</a>
                <a href="#Categories">Posts</a>
            </div>
        </nav>
    )
}

export default AdminNav;