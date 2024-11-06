import './App.css'
import { Section } from './Section/Section';

function App() {

  return (
		<>
			<div className={css.boxApp}>
				<Section title='Phonebook'>
					<Form onSubmit={this.handleSubmit} />
				</Section>
				<Section title='Contacts'>
					<Filter handleSearch={this.handleSearch} filter={this.state.filter} />
					<ContactList handleRemove={this.handleRemove} contacts={this.state.contacts} filter={this.state.filter} />
				</Section>
			</div>
		</>
	);
}

export default App
