import { useState } from 'react';
import InputNameAge from './InputNameAge';
import InsuranceEntry from './InsuranceEntry';
import { getInsurancePrice, calculateTotal } from '../model/pricetable';

export default function PersonInsurance({ person, onChange }) {
	// age or name was updated
	const updatePerson = (event) => {
		const { name, value: newValue, type } = event.target;
		const value = type === 'number' && newValue ? Number(newValue) : newValue;

		onChange({ ...person, [name]: value });
	};

	// toggle one of the insurance keys in the insurance object in the person object
	const toggleInsurance = (ins) => (event) => {
		const newPerson = {
			...person,
			insurances: { ...person.insurances, [ins]: !person.insurances[ins] },
		};
		onChange(newPerson);
	};

	return (
		<tr>
			<InputNameAge handleChange={updatePerson} person={person}></InputNameAge>
			{Object.keys(person.insurances).map((ins, idx) => {
				const insPrice = getInsurancePrice(ins, person.age, person.startAge);
				return (
					<InsuranceEntry
						key={idx}
						price={insPrice}
						active={person.insurances[ins]}
						toggle={toggleInsurance(ins)}
					></InsuranceEntry>
				);
			})}

			<td className="px-6 py-4 whitespace-nowrap">
				<span className="inline-grid grid-rows-3 gap-y-2">
					<span className="font-mono">
						{' '}
						€ {calculateTotal(person).toFixed(2)} / j
					</span>
					<span className="font-mono">
						{' '}
						€ {(calculateTotal(person) / 4).toFixed(2)} / 3m
					</span>
					<span className="font-mono">
						{' '}
						€ {(calculateTotal(person) / 12).toFixed(2)} / m
					</span>
				</span>
			</td>
		</tr>
	);
}
