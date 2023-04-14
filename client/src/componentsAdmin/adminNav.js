// admin nav from template
import '../styles/output.css';

function Nav () {
    return (
        <nav className="#030712 grid grid-cols-5 gap-4">
            <div>
                <a href="#Home">BrandImage</a>
            </div>
            <div className="grid-span-3">empty</div>
            <div className="grid-span-2">
                <a href="#Home">Home</a>
                <a href="#Posts">Posts</a>
                <a href="#Categories">Posts</a>
            </div>
        </nav>
    )
}