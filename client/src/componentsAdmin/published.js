// published
import '../styles/output.css';
import { FaEdit, FaTrash} from 'react-icons/fa';

const Published = ({blogs}) => {
  if (!blogs.length) {
  return (
  <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl my-6 max-w-full'>
      <div className="flex-grow max-w-full">
        <div>
        <h1 className='text-xl block m-5'>Published Blog Posts</h1>
        <table>
        <thead className="bg-lightGrey border-b max-w-full">
          <tr>
            <th scope="col" className="text-l font-medium text-mainBlack px-6 py-4 text-left">
              Blog Title
            </th>
            <th scope="col" className="text-sm font-medium text-mainBlack px-6 py-4 text-left">
              Author
            </th>
            <th scope="col" className="text-sm font-medium text-mainBlack px-6 py-4 text-left">
              Blog Text
            </th>
            <th scope="col" className="text-sm font-medium text-mainBlack px-6 py-4 text-left">
              Created At
            </th>
            <th scope="col" className="text-sm font-medium text-mainBlack px-3 py-4 text-left">
              Edit
            </th>
            <th scope="col" className="text-sm font-medium text-mainBlack px-3 py-4 text-left">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-mainWhite border-b border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              This is where blog title goes
            </td>
            <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
              This is where author goes
            </td>
            <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
              This is where blog text preview goes
            </td>
            <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
              This is where date goes
            </td>
            <td className="align-center">
            <FaEdit />
            </td>
            <td className="align-center">
            <FaTrash />
            </td>
          </tr>
          <tr className="bg-mainWhite border-b border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              This is where blog title goes
            </td>
            <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
              This is where author goes
            </td>
            <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
              This is where blog text preview goes
            </td>
            <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">
              This is where date goes
            </td>
            <td className="justify-center">
            <FaEdit />
            </td>
            <td className="justify-center">
            <FaTrash />
            </td>
          </tr>
        </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

  return (
    <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl my-5 max-w-full'>
    <div className="flex-grow max-w-full">
      <div className="max-w-screen">
      <h1 className='text-xl block m-5'>Published Blog Posts</h1>
      <table>
      <thead className="bg-lightGrey border-b max-w-full">
        <tr>
          <th scope="col" className="text-l font-medium text-mainBlack px-6 py-4 text-left">
            Blog Title
          </th>
          <th scope="col" className="text-sm font-medium text-mainBlack px-6 py-4 text-left">
            Author
          </th>
          <th scope="col" className="text-sm font-medium text-mainBlack px-6 py-4 text-left">
            Blog Text Preview
          </th>
          <th scope="col" className="text-sm font-medium text-mainBlack px-6 py-4 text-left">
            Created At
          </th>
          <th scope="col" className="text-sm font-medium text-mainBlack px-3 py-4 text-left">
            Edit
          </th>
          <th scope="col" className="text-sm font-medium text-mainBlack px-3 py-4 text-left">
            Delete
          </th>
        </tr>
      </thead>
      <tbody>
        {blogs && 
        blogs.map((blog) => (
        <tr key={blog._id} className="bg-mainWhite border-b border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{blog.blogTitle}</td>
          <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">{blog.blogAuthor}</td>
          <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap overflow-hidden">{blog.blogText.substring(0,25)}...</td>
          <td className="text-sm text-mainBlack font-light px-6 py-3 whitespace-nowrap">{blog.createdAt}</td>
          <td className="align-center">
          <FaEdit />
          </td>
          <td className="align-center">
          <FaTrash />
          </td>
        </tr>
        ))}
      </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default Published;