import '../styles/output.css';
import { FaAngleDown } from 'react-icons/fa';

function AdminAside() {
    return (
        <div className="relative bg-mainWhite">
            <nav>
                <div className="bg-mainWhite">
                    <ul>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle border-t"> 
                            <a href="Posts" className="p-4 text-lg font-semibold text-grey">
                                Posts <FaAngleDown className="inline" />
                            </a>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                            <a href="Categories" className="p-4 text-lg font-semibold text-grey">
                                Categories <FaAngleDown className="inline" /> </a>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                            <a href="Media" className="p-4 text-lg font-semibold text-grey">
                                Media</a>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                            <a href="Subscribers" className="p-4 text-lg font-semibold text-grey">
                                Subscribers <FaAngleDown className="inline" /></a>
                        </li>
                        <li className="py-6 rounded-lg hover:bg-lightGrey align-middle">
                            <a href="Account" className="p-4 text-lg font-semibold text-grey">
                                Account</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default AdminAside;