import '../styles/output.css';
import { FaEdit, FaTrash} from 'react-icons/fa';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PROFILE } from '../utils/queries';

function Account () {

  const { data } = useQuery(QUERY_SINGLE_PROFILE);

  const profile = data?.profiles || [];
    return (
        <div className='bg-mainWhite flex rounded-lg drop-shadow-2xl m-8'>
        <div key={profile._id} className="flex-grow m-5 p-2">
          <h1 className='justify-center font-bold text-xl block my-5'>My Account</h1>
          <p className='block border-b'>First name: <span>{profile.firstName} </span></p>
          <p className='block border-b'>Last name: <span>{profile.lastName}</span></p>
          <p className='block border-b'>Username: <span>{profile.username}</span></p>
          <p className='block border-b'>Email: <span>{profile.email}</span></p>
          <div className="justify-center inline">
            <btn className='block bg-mainBlue hover:bg-darkestBlue rounded-md p-2 my-3 text-mainWhite max-w-50'><span><FaEdit /> </span>Edit Account</btn>
            <btn className='block bg-mainBlue hover:bg-darkestBlue rounded-md p-2 my-3 text-mainWhite max-w-50'><span><FaTrash /> </span>Delete Account</btn>
          </div>
      </div>
    </div>
    )
}

export default Account;