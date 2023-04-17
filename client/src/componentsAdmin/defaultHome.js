import '../styles/output.css';

const DefaultHome = ({blogs}) => {
    if (!blogs.length) {
    return (
        <div className="mt-10 flex ...">
        <div>
            <div className="flex-none w-14 h-14 ..."></div>
            <div className="flex-grow max-w-100 h-14 ...">
                <h1 className="mx-3 text-mainWhite text-2xl">Recent Blog Posts</h1>
                <div className="flex">
                <div class="max-w-sm mx-3 my-5 h-auto rounded overflow-hidden drop-shadow-2xl bg-mainWhite transition duration-300 ease-in-out hover:bg-lightGrey">
                    <img className="w-full" src="../Italy.jpg" alt="Italy Blog"></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The History of La Riplona</div>
                            <p className="text-gray-700 text-base">
                            Until the 1960s, the lands on which Ripolina extends were part of a large La Piana estate belonging to the noble Roman family Ceriana Maineri Lante della Rovere. The brothers Enzo and Italo Cresti bought in 1966 “a piece” of that land of Piana which today has become La Ripolina. At first, in addition to the cultivation of cereals, pig breeding was also practiced, which was then abandoned...
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Travel</span>
                            <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Italy</span>
                            <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Accomodations</span>
                        </div>
                </div>

                <div className="max-w-sm mx-3 my-5 h-auto rounded overflow-hidden drop-shadow-2xl bg-mainWhite transition duration-300 ease-in-out hover:bg-lightGrey">
                    <img className="w-full" src="../Nature.png" alt="Italy Blog"></img>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">The Wonders of the Pacific Northwest</div>
                            <p className="text-gray-700 text-base">
                                Our 5 favorite hidden gems in Oregon and Washington...
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Travel</span>
                            <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Hiking</span>
                        </div>
                </div>
                </div>
            </div>
            <div className="flex-none w-14 h-14 ..."></div>
        </div>
        </div>
        )
    }

    return (
        <div className="mt-10 flex ...">
        <div className="flex w-14 h-14 ..."></div>
            <div className="flex-grow max-w-100 h-14 ...">
                <h1 className="mx-3 text-mainWhite text-2xl">Recent Blog Posts</h1>
                <div>
                <div className="flex-grow">{blogs && 
                        blogs.map((blog) => (
                        <div key={blog._id}>
                    <div class="max-w-sm mx-3 my-5 h-auto rounded overflow-hidden drop-shadow-2xl bg-mainWhite transition duration-300 ease-in-out hover:bg-lightGrey">
                            <img className="w-full" src="../Italy.jpg" alt="default"></img>
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{blog.blogTitle}</div>
                                        <p className="text-gray-700 text-base">{blog.blogText}</p>
                                    </div>
                                    <div className="px-6 pt-4 pb-2">
                                        <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Category</span>
                                        <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Category</span>
                                        <span className="inline-block bg-mainBlue rounded-full px-3 py-1 text-sm font-semibold text-mainWhite mr-2 mb-2">Category</span>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
    }

export default DefaultHome;