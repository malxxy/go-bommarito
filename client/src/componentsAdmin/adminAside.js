import '../styles/output.css';
import { FaAngleDown } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';

function AdminAside() {
    return (
        <div className="relative bg-mainWhite">
            <nav>
                <div className="bg-mainWhite">
                    <ul>
                    <li className="py-6 rounded-lg hover:bg-lightGrey align-middle border-t"> 
                            <Link to="/Posts">
                                <h2 className="p-4 text-lg font-semibold text-grey">
                                    Posts <FaAngleDown className="inline" />
                                </h2>
                            </Link>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                            <Link to="/Categories">
                                <h2 className="p-4 text-lg font-semibold text-grey">
                                Categories <FaAngleDown className="inline" /> </h2>
                            </Link>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                            <Link to="/Media">
                                <h2 className="p-4 text-lg font-semibold text-grey">
                                    Media</h2>
                            </Link>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                            <Link to="/Subscribers">
                                <h2 className="p-4 text-lg font-semibold text-grey">
                                    Subscribers <FaAngleDown className="inline" /></h2>
                            </Link>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                        <Link to="/Account">
                            <h2 className="p-4 text-lg font-semibold text-grey">
                                Account</h2>
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default AdminAside;