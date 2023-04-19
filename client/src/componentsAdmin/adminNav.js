import '../styles/output.css';
import Auth from "../../src/utils/auth";

function AdminNav () {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
      };
    return (
        <nav className="bg-mainWhite mx-auto flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
                <Link to='/AdminHome'>
                    <h2 className="-m-1.5 p-1.5">
                    <span className="sr-only">GoBommarito</span>
                    <img className="h-12 w-auto" src='../Logo.png' alt="GoBommarito" />
                    </h2>
                </Link>
            </div>
            <div className="p-4">
                <Link to='/AdminHome'>
                    <h2 className="p-4 text-lg rounded-md hover:bg-mainBlue hover:text-mainWhite font-semibold leading-6 text-gray-900">
                        Home
                    </h2>
                </Link>
                <Link to='/Posts'>
                    <h2 className="p-4 text-lg  rounded-md font-semibold hover:bg-mainBlue hover:text-mainWhite leading-6 text-gray-900">
                        Posts
                    </h2>
                </Link>
                <Link to='/Categories'>
                    <h2 className="p-4 rounded-md text-lg font-semibold hover:bg-mainBlue hover:text-mainWhite leading-6 text-gray-900">
                        Categories</h2>
                </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end" onClick={logout}>
                <a href="/" className="p-4 rounded-md text-lg font-semibold leading-6 text-gray-900 hover:bg-mainBlue hover:text-mainWhite">
                Log out <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
        </nav>
    )
}

export default AdminNav;