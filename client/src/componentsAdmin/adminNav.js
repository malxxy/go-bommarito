// admin nav from template
import '../styles/output.css';

function AdminNav () {
    return (
        <nav className="bg-mainWhite mx-auto flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <a href="#Home" className="-m-1.5 p-1.5">
                <span className="sr-only">GoBommarito</span>
                <img className="h-8 w-auto" src='client/public/Logo.png' alt="GoBommarito Logo" />
                </a>
            </div>
            <div className="p-4">
                <a href="#Home" className="p-4 text-lg font-semibold leading-6 text-gray-900">
                    Home
                </a>
                <a href="#Posts" className="p-4 text-lg font-semibold leading-6 text-gray-900">
                    Posts
                </a>
                <a href="#Categories" className="p-4 text-lg font-semibold leading-6 text-gray-900">
                    Categories</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="#login" className="text-lg font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>
    )
}

export default AdminNav;