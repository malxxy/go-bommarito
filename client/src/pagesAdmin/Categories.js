import AllCategories from "../componentsAdmin/allCategories";
import EditCategories from "../componentsAdmin/editCategories";
import '../styles/output.css';

function Categories() {
    return (
        <div className="mt-10 flex ...">
            <div className="flex-none w-14 h-14 ..."></div>
            <div className="grow h-14 ...">
                <EditCategories />
                <AllCategories />
            </div>
            <div className="flex-none w-14 h-14 ..."></div>
        </div>
    );
    }

   export default Categories;