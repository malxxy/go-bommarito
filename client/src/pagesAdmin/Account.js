import '../styles/output.css';
import { FaEdit, FaTrash} from 'react-icons/fa';

function Account () {
    return (
        <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl'>
        <div className="flex-grow">
          <div>
          <h1 className='justify-center text-xl block m-5'>My Account</h1>
          <p className='block'>First name: <span></span></p>
          <p className='block'>Last name: <span></span></p>
          <p className='block'>Username: <span></span></p>
          <p className='block'>Email: <span></span></p>
          <div className='block'>
          <btn><span><FaEdit /> </span>Edit Account</btn>
          <btn><span><FaTrash /> </span>Delete Account</btn>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Account;