import React, { Component } from 'react';

interface FormProps {
	addContact: (newContact: { id: string; name: string; number: string }) => void;
}

interface FormState {
	name: string;
	number: string;
}

class Form extends Component<FormProps, FormState> {
	constructor(props: FormProps) {
		super(props);
		this.state = {
			name: '',
			number: '',
		};
	}

	handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		this.setState({ [name]: value } as Pick<FormState, keyof FormState>);
	};

	handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const { name, number } = this.state;
		if (name && number) {
			const newContact = {
				id: `id-${Date.now()}`, // Tworzymy unikalne ID na podstawie timestamp
				name,
				number,
			};
			this.props.addContact(newContact);
			this.setState({ name: '', number: '' }); // Reset formularza po dodaniu
		}
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type='text' name='name' value={this.state.name} onChange={this.handleInputChange} placeholder='Name' />
				<input type='text' name='number' value={this.state.number} onChange={this.handleInputChange} placeholder='Phone Number' />
				<button type='submit'>Add Contact</button>
			</form>
		);
	}
}

export { Form };
