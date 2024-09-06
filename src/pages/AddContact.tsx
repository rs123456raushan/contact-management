import { ContactForm } from "../components/ContactForm";
import { useDispatch } from "react-redux";
import { addContact } from "../store/contactSlice";
import { useNavigate } from "react-router-dom";

export const AddContact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (contact: { name: string; phone: string; email: string }) => {
        const id = Math.random(); // Simple ID generation for now
        dispatch(addContact({ ...contact, id }));
        navigate("/");
    };

    return (
        <div className="p-4">
            <h1 style={{ paddingLeft: '18px' }} className="text-2xl text-center font-bold mb-4">Add Contact</h1>
            <ContactForm onSubmit={handleSubmit} />
        </div>
    );
};
