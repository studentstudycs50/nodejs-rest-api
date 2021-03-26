const Contact = require('./schema/contactSchema');

async function listContact() {
    try {
        const contactList = await Contact.find({});
    }
    catch (error) {
        console.log(error)
    }
}
listContact()

async function getContactById (contactId) {
    try {
      const contact = await Contact.findById(contactId); 
    }
    catch (error) {
        console.log(error)
    }
}
getContactById()

async function addContact (body) {
    try {
      const newContact = await Contact.create(body);
    }
    catch (error) {
        console.log(error)
    }
}
addContact()

async function removeContact (contactId) {
    try {
      const removedContact = await Contact.findByIdAndDelete(contactId);
    }
    catch (error) {
        console.log(error)
    }
}
removeContact()
 
async function updateContact  (contactId, body) {
    try {
      const updatedContact = await Contact.findByIdAndUpdate(contactId, body, { new: true });
    }
    catch (error) {
        console.log(error)
    }
}

updateContact()

module.exports = {
  listContact,
  getContactById,
  removeContact,
  addContact,
    updateContact,
};
