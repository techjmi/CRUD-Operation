const Contact = require("../model/contactModel");

const contact = async (req, res) => {
    try {
        const { email, message, name } = req.body;

        console.log("Received form data:", { name, email, message });

        // Create a new Contact document for each message
        const createdForm = await Contact.create({
            name,
            email,
            message
        });

        console.log("New form created:", createdForm);
        return res.status(200).json({ msg: "Form sent successfully", formCreated: createdForm });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: "Internal Server Error" });
    }
};

module.exports = contact;
