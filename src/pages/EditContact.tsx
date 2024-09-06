import { ContactForm } from "../components/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editContact } from "../store/contactSlice";
import { RootState } from "../store";

export const EditContact = () => {
    const { id } = useParams();
    const contact = useSelector((state: RootState) =>
        state.contacts.contacts.find((c) => c.id === Number(id))
    );
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (updatedContact: { name: string; phone: string; email: string }) => {
        if (contact) {
            dispatch(editContact({ ...contact, ...updatedContact }));
            navigate("/");
        }
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl text-center font-bold mb-4">Edit Contact</h1>
            {contact ? (
                <ContactForm onSubmit={handleSubmit} initialData={contact} />
            ) : (
                <p>Contact not found.</p>
            )}
        </div>
    );
};
