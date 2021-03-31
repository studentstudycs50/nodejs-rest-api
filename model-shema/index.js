// const Contact = require('./schema/contactSchema');

// async function listContacts() {
//     try {
//         const contactList = await Contact.find({});
//         //console.log(contactList)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// listContacts()

// async function getContactById (contactId) {
//     try {
//       const contact = await Contact.findById(contactId); 
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// getContactById()

// async function addContact (body) {
//     try {
//       const newContact = await Contact.create(body);
//      // const newContact = await Contact.create({"name":"Chaim Lewis","email":"dui.in@egetlacus.ca","phone":"(294) 840-6685","subscription":"pro","password":"password","token":""});
//    // console.log(newContact)
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// addContact()

// async function removeContact (contactId) {
//     try {
//       const removedContact = await Contact.findByIdAndDelete(contactId);
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
// removeContact()
 
// async function updateContact  (contactId, body) {
//     try {
//       const updatedContact = await Contact.findByIdAndUpdate(contactId, body, { new: true });
//     }
//     catch (error) {
//         console.log(error)
//     }
// }

// updateContact()

// module.exports = {
//   listContacts,
//   getContactById,
//   removeContact,
//   addContact,
//     updateContact,
// };

const Contact = require('./schema/contactSchema');

const listContacts = async () => {
  const contactsList = await Contact.find({});
  return contactsList;
};

const getContactById = async contactId => {
  const contact = await Contact.findById(contactId);
  return contact;
};

const removeContact = async contactId => {
  const removedContact = await Contact.findByIdAndDelete(contactId);
  return removedContact;
};

const addContact = async body => {
  const newContact = await Contact.create(body);
  return newContact;
};

const updateContact = async (contactId, body) => {
  const updatedContact = await Contact.findByIdAndUpdate(contactId, body, { new: true });
  return updatedContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
