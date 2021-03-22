import React from 'react';
import {connect} from 'react-redux'
import { deleteContact } from '../redux/phoneBook/phoneBookActions';
import shortId from 'shortid'


const ContactList = (props) => {
    return (
          props.contacts.length
          ? props.contacts.map((contact, index) => {
            return (
              <li key={contact.id}>
                <p>{index + 1 + ') ' + contact.name + " : " + contact.number}</p>
                <button onClick={() => props.onDeleteContact(contact.id)} type='button'>Удалить</button>
              </li>
            )
          })
          : <li key={shortId.generate()}>
              <p>No saved contacts yet</p>
            </li>
    )
}

const getVisibleContacts = (contacts, filter) => {
  const optimizedFilterName = filter.toLowerCase();
  return contacts.filter(({name}) => name.toLowerCase().includes(optimizedFilterName))
}

const mapStateToProps = ({phoneBook: {contacts, filter}}) => ({
  contacts: getVisibleContacts(contacts, filter)
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);