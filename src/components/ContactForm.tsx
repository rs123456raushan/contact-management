import { useState } from "react";

interface ContactFormProps {
    onSubmit: (contact: { name: string; phone: string; email: string }) => void;
    initialData?: { name: string; phone: string; email: string };
}

export const ContactForm = ({ onSubmit, initialData }: ContactFormProps) => {
    const [name, setName] = useState(initialData?.name || "");
    const [phone, setPhone] = useState(initialData?.phone || "");
    const [email, setEmail] = useState(initialData?.email || "");

    const handleSubmit = () => {
        onSubmit({ name, phone, email });
        setName("");
        setPhone("");
        setEmail("");
    };

    return (
        <div className="flex flex-col space-y-4 p-4">
            <input
                type="text"
                placeholder="Name"
                className="border p-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Phone"
                className="border p-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                className="border p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};
