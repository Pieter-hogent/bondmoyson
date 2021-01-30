import { useEffect, useState } from 'react';
import './App.css';
import PersonInsurance from './components/PersonInsurance';
import { calculateTotal, getInsurancePrice } from './model/pricetable';
import ExcelExport from './components/ExcelExport';

const insurances = [
	'bijdrage',
	'zorgkas',
	'kliniplan',
	'kliniplanplus',
	'dentaplan',
	'viviplan',
];
const emptyPerson = {
	name: '',
	age: 0,
	startAge: 0,
	insurances: {},
};

function App() {
	// state is an array of persons
	const [state, setState] = useState([]);
	const [renderExcel, setRenderExcel] = useState(true);

	useEffect(() => {
		insurances.map((ins) => (emptyPerson.insurances[ins] = false));
		emptyPerson.insurances['zorgkas'] = true;
		emptyPerson.insurances['bijdrage'] = true;
		setState([emptyPerson, emptyPerson, emptyPerson, emptyPerson]);
	}, []);

	const addRow = () => {
		setState([...state, emptyPerson]);
	};
	const removeRow = () => {
		const newState = [...state];
		newState.pop();
		setState(newState);
	};

	// we don't want both kliniplan AND kliniplanplus active
	// simultaneously, so check for activating of either and deactivate other
	const personChange = (idx) => (person) => {
		let newState = state.map((oldPerson, i) => {
			if (i === idx) {
				// if activating kliniplan, make sure kliniplanplus gets deactivated
				if (
					oldPerson.insurances['kliniplan'] !==
						person.insurances['kliniplan'] &&
					person.insurances['kliniplan']
				) {
					person.insurances['kliniplanplus'] = false;
				}
				// and vice versa
				if (
					oldPerson.insurances['kliniplanplus'] !==
						person.insurances['kliniplanplus'] &&
					person.insurances['kliniplanplus']
				) {
					person.insurances['kliniplan'] = false;
				}

				if (oldPerson.age !== person.age) {
					person.insurances['bijdrage'] = person.age >= 25;
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

	const imageNameForInsurance = (ins) => {
		if (ins === 'zorgkas' || ins === 'bijdrage') return null;
		if (ins === 'kliniplanplus')
			return process.env.PUBLIC_URL + '/icon-kliniplan.svg';
		return process.env.PUBLIC_URL + '/icon-' + ins + '.svg';
	};
	const insuranceNameForInsurance = (ins) => {
		if (ins === 'kliniplanplus') return 'kliniplan+';
		return ins;
	};

	const createExcelData = () => {
		let excelData = state.filter((x) => x.age > 0);

		// console.log(excelData);
		return excelData.map((person) => {
			let excelPerson = { name: person.name, age: person.age };
			Object.keys(person.insurances).map((ins) => {
				excelPerson[ins] = person.insurances[ins]
					? getInsurancePrice(ins, person.age, person.startAge)
					: 0;
				return ins;
			});
			excelPerson['totaal'] = calculateTotal(person);

			return excelPerson;
		});
	};

	//
	return (
		<>
			<span className="flex flex-row flex-none">
				<span className="inline-grid grid-cols-2 gap-x-3 p-5 self-start ">
					{/* + and - buttons, at top left */}
					<button
						type="button"
						onClick={addRow}
						className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
						className="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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

				<span className="ml-auto">
					{renderExcel ? (
						<ExcelExport
							data={createExcelData()}
							filename={`bond_moyson_${state[0].name}`}
						/>
					) : (
						''
					)}
				</span>
				{/* total price of all persons (displayed at top right) */}
				<span className="ml-auto ">
					<span className="inline-grid grid-rows-3 gap-y-2 self-end mr-4 m-2 p-2 border-2 rounded-xl border-red-200">
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

			{/* table with all persons and their costs */}
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
													className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase  "
												>
													<span className="inline-grid grid-cols-3 gap-x-1 align-middle">
														{imageNameForInsurance(i) ? (
															<img
																src={imageNameForInsurance(i)}
																width="16px"
																height="16px"
															></img>
														) : (
															''
														)}
														<span className="align-middle">
															{insuranceNameForInsurance(i)}
														</span>
													</span>
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
								<tbody className="bg-white divide-y divide-gray-200">
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
