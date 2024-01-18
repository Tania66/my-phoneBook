import { useDispatch, useSelector } from 'react-redux';
import { deletedContact } from '../../redux/contacts/options';
import { selectFilterContact } from '../../redux/contacts/selectors';
import {  Button, ContactInner, ItemWrap, List, Name, Number, Section} from './ContactList.styled';
import { FcReddit } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ContactList = () => {
  const contacts = useSelector(selectFilterContact);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deletedContact(contactId));
  };

  return (
    <Section>
    <List>  
      {contacts.map(contact => (
        <ItemWrap key={contact.id}>
            <ContactInner>
            <FcReddit size={25} />
            <div>
                <Name> {contact.name}</Name>
                <Number>{contact.number}</Number>
            </div>
            </ContactInner>
          <Button onClick={() => handleDeleteContact(contact.id)}>
          <MdOutlineDeleteOutline color='#7e8fdd' size={25} />
          </Button>
        </ItemWrap>
      ))}
    </List>
    </Section> 
  );
};

export default ContactList;
