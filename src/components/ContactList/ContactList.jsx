import { useDispatch, useSelector } from 'react-redux';
import { deletedContact } from '../../redux/contacts/options';
import { selectFilterContact } from '../../redux/contacts/selectors';
import {  Button, ContactInner, ItemWrap, List, Name, Number, Section, SectionHeader } from './ContactList.styled';
import { FcReddit } from "react-icons/fc";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Filter from 'components/Filter/Filter';
import ModalAdd from 'components/Modall/ModalAdd';

const ContactList = () => {
  const contacts = useSelector(selectFilterContact);
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deletedContact(contactId));
  };

  return (
    <Section>
        <SectionHeader>
           <Filter />
             <ModalAdd/>   
        </SectionHeader>
 
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
