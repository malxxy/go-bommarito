import '../styles/output.css';
import { FaEdit, FaTrash} from 'react-icons/fa';

function AllCategories () {
    return (
        <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl'>
        <div className="flex-grow">
          <div>
          <h1 className='justify-center text-xl block m-5'>Drafted Blog Posts</h1>
          <table className="min-w-full">
          <thead class="bg-lightGrey border-b">
            <tr>
              <th scope="col" class="text-l font-medium text-mainBlack px-6 py-4 text-left">
                Category Name
              </th>
              <th scope="col" class="text-sm font-medium text-mainBlack px-3 py-4 text-left">
                Edit
              </th>
              <th scope="col" class="text-sm font-medium text-mainBlack px-3 py-4 text-left">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-mainWhite border-b border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Category name goes here
              </td>
              <td className="align-center">
              <FaEdit />
              </td>
              <td className="align-center">
              <FaTrash />
              </td>
            </tr>
            <tr class="bg-mainWhite border-b border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Category name goes here
              </td>
              <td className="align-center">
              <FaEdit />
              </td>
              <td className="align-center">
              <FaTrash />
              </td>
            </tr>
            <tr class="bg-mainWhite border-b border-mainBlue transition duration-300 ease-in-out hover:bg-lightGrey">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Category name goes here
              </td>
              <td className="align-center">
              <FaEdit />
              </td>
              <td className="align-center">
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

export default AllCategories;