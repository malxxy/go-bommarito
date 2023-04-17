import '../styles/output.css';
import DefaultHome from "../componentsAdmin/defaultHome"
import { useQuery } from '@apollo/client';
import { QUERY_BLOGS } from '../utils/queries';

function AdminHome () {

    const { data } = useQuery(QUERY_BLOGS);

    const blogs = data?.blogs || [];

    return ( 
        <div>
            <DefaultHome 
            blogs={blogs}/>
        </div>
    )
};

export default AdminHome;