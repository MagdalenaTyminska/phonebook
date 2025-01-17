import './App.css';
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Contact } from './Form/Form'; // zaimportuj interfejs Contact, jeśli nie jest zaimportowany

class App extends Component {
	state = {
		contacts: [] as Contact[], // Inicjalizuj stan kontaktów
	};

	// Funkcja do dodawania nowego kontaktu
	addContact = (newContact: Contact) => {
		this.setState((prevState) => ({
			contacts: [...prevState.contacts, newContact],
		}));
	};

	render() {
		return (
			<div>
				<Section title='Phonebook'>
					<Form addContact={this.addContact} /> {/* Przekazujemy addContact jako prop */}
				</Section>
				<Section title='Contacts'>
					<ContactList contacts={this.state.contacts} /> {/* Przekazujemy kontakty */}
				</Section>
			</div>
		);
	}
}

export { App };
