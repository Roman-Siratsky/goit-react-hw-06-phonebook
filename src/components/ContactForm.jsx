import React, { Component } from 'react'
import {connect } from 'react-redux'
import { addContact } from '../redux/phoneBook/phoneBookActions'

class ContactForm extends Component{
    state = {
        name: '',
        number: '+38'
    }
    handleNameChange = (event) => {
        const {name, value} = event.currentTarget
        this.setState({ [name]: value })
    }
    handleNumberChange = (event) => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value})
    }
    onExistingContactAlert = (event) => {
        event.preventDefault()
        this.setState({name: '', number: '+38'})
        alert(this.state.name + ' уже есть в списке контактов')
    }

    getSomeOfName = (name) => {
        const optimizedContactName = name.toLowerCase();
        return this.props.contacts.some(({name}) => name.toLowerCase() === optimizedContactName)
      }
    
    render() {
        const { onAddNewContact } = this.props
        const { name, number } = this.state
        const existingContact = this.getSomeOfName(name)
    return (
            <form action="">
                <label htmlFor="">
                    Name <input
                    name='name'
                    onChange={this.handleNameChange}
                    type="text"
                    value={name} />
                </label>
                <label htmlFor="">
                    Number <input
                    name='number'
                    onChange={this.handleNumberChange}
                    type="tel"
                    value={number} />
                </label>
                <button
                    disabled={(name.length && number.length > 3) 
                        ? false
                        : true
                    }
                        onClick={existingContact
                            ? this.onExistingContactAlert 
                            : (e) => {
                                e.preventDefault()
                                onAddNewContact(name, number)
                                this.setState({name: '', number: '+38'})
                    }}
                    type='submit'>Создать
                </button>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    onAddNewContact: (name, number) => dispatch(addContact(name, number)),
})
const mapStateToProps = (state) => ({
    contacts: state.phoneBook.contacts
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);