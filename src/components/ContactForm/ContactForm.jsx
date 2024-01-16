import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/options";
import { getContact} from "../../redux/contacts/selectors";
import shortid from 'shortid';
import { ButtonSubmit, Form, Input } from "./ContactForm.styled";

const ContactForm = ({closeModal}) => {
    const contacts = useSelector(getContact);
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
  
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();
  
    const handleAddContact = (name, number) => {
      const contact = {
        id: shortid.generate(),
        name: name,
        number: number,
      };
  
      const saveContact = contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );
  
      if (saveContact) {
        alert(`${name} is already in contacts`);
        return;
      }
  
      const saveNumber = contacts.some(contact => contact.number === number);
  
      if (saveNumber) {
        alert(`${number} is already in contacts`);
        return;
      }
  
      dispatch(addContact(contact));
    };
  
    const handleChangeName = event => {
      setName(event.target.value);
    };
  
    const handleChangeNumber = event => {
      setNumber(event.target.value);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      setName('');
      setNumber('');
      handleAddContact(name, number);
      closeModal();
    };

    return (
        <Form onSubmit={handleSubmit}>
          <label htmlFor={nameInputId}>
            <Input
              placeholder="Name"
              value={name}
              type="text"
              required
              id={nameInputId}
              onChange={handleChangeName}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
          </label>
          <label htmlFor={numberInputId} >
            <Input
            placeholder="Number"
              value={number}
              required
              type="number"
              onChange={handleChangeNumber}
              id={numberInputId}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            />
          </label>
          <ButtonSubmit type="submit">
            Add contact
          </ButtonSubmit>
        </Form>
      );
    }
    
    export default ContactForm;