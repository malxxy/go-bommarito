import '../styles/output.css';

function AdminAside() {
    return (
        <div className="relative bg-mainWhite p-4 w-80">
            <nav>
                <div className="bg-mainWhite">
                    <ul className="w-60">
                        <li className="pt-3"> 
                            <a href="#Posts" className="p-4 text-lg font-semibold text-grey">
                                Posts
                            </a>
                        </li>
                        <li className="mt-12">
                            <a href="#Categories" className="p-4 text-lg font-semibold text-grey">
                                Categories</a>
                        </li>
                        <li className="mt-12">
                            <a href="#Media" className="p-4 text-lg font-semibold text-grey">
                                Media</a>
                        </li>
                        <li className="mt-12">
                            <a href="#Subscribers" className="p-4 text-lg font-semibold text-grey">
                                Subscribers</a>
                        </li>
                        <li className="mt-12">
                            <a href="#Account" className="p-4 text-lg font-semibold text-grey">
                                Account</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};

export default AdminAside;