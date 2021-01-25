import { useEffect, useState } from 'react';
import './App.css';
import PersonInsurance from './components/PersonInsurance';
import { calculateTotal } from './model/pricetable';

const insurances = ['kliniplan', 'kliniplanplus', 'dentaplan', 'viviplan'];
const emptyPerson = { name: '', age: 0, startAge: 0, insurances: {} };

function App() {
	const [state, setState] = useState([]);

	useEffect(() => {
		insurances.map((ins) => (emptyPerson.insurances[ins] = true));
		emptyPerson.insurances['kliniplanplus'] = false;
		setState([emptyPerson]);
	}, []);

	const addRow = () => {
		setState([...state, emptyPerson]);
	};
	const removeRow = () => {
		const newState = [...state];
		newState.pop();
		setState(newState);
	};
	const personChange = (idx) => (person) => {
		let newState = state.map((oldPerson, i) => {
			if (i === idx) {
				if (
					oldPerson.insurances['kliniplan'] !==
						person.insurances['kliniplan'] &&
					person.insurances['kliniplan']
				) {
					person.insurances['kliniplanplus'] = false;
				}
				if (
					oldPerson.insurances['kliniplanplus'] !==
						person.insurances['kliniplanplus'] &&
					person.insurances['kliniplanplus']
				) {
					person.insurances['kliniplan'] = false;
				}
				return person;
			}
			return oldPerson;
		});

		setState(newState);
	};
	const calculateAllPersonsTotal = () => {
		let total = state.reduce(
			(total, person) => total + calculateTotal(person),
			0
		);
		return total;
	};
	return (
		<>
			<span className="flex flex-row flex-none">
				<span className="inline-grid grid-cols-2 gap-x-3 p-5 self-start ">
					<button
						type="button"
						onClick={addRow}
						className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
					</button>
					<button
						type="button"
						onClick={removeRow}
						className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 12m0 6m0-6h6m-6 0H6"
							/>
						</svg>
					</button>
				</span>
				<span className="ml-auto pr-6">
					<span className="inline-grid grid-rows-3 gap-y-2 self-end">
						<span className="font-mono text-lg">
							€ {calculateAllPersonsTotal().toFixed(2)} / j
						</span>
						<span className="font-mono text-lg">
							{' '}
							€ {(calculateAllPersonsTotal() / 4).toFixed(2)} / 3m
						</span>
						<span className="font-mono text-lg">
							{' '}
							€ {(calculateAllPersonsTotal() / 12).toFixed(2)} / m
						</span>
					</span>
				</span>
			</span>

			<div className="flex flex-col">
				<div className="overflow-x-auto  ">
					<div className=" align-middle inline-block min-w-full ">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											naam
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											leeftijd
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											instap
										</th>
										{insurances.map((i) => {
											return (
												<th
													scope="col"
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
												>
													{i}
												</th>
											);
										})}
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											totaal
										</th>
									</tr>
								</thead>
								<tbody class="bg-white divide-y divide-gray-200">
									{state.map((person, idx) => {
										return (
											<PersonInsurance
												key={idx}
												person={person}
												onChange={personChange(idx)}
											></PersonInsurance>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
