import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useDispatch } from "react-redux";
import { deleteContact } from "../store/contactSlice";
import { useNavigate } from "react-router-dom";

export const Contacts = () => {
    const contacts = useSelector((state: RootState) => state.contacts.contacts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = (id: number) => {
        dispatch(deleteContact(id));
        navigate("/");
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl text-center font-bold mb-4">Contacts</h1>
            <Link to="/add" style={{ display: 'flex', justifyContent: 'center' }} className="text-blue-500">Add New Contact</Link>
            <div className="grid gap-4 mt-4">
                {contacts.map((contact) => (
                    <div className="border p-4 flex justify-between" key={contact.id}>
                        <div>
                            <p>{contact.name}</p>
                            <p>{contact.phone}</p>
                            <p>{contact.email}</p>
                        </div>
                        <div>
                            <Link to={`/edit/${contact.id}`} className="text-blue-500 ml-2">Edit</Link>
                            <button onClick={() => handleDelete(contact.id)} className="text-red-500 ml-2">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
