import PersonInsurance from './PersonInsurance';

export default function InputNameAge({ handleChange, person }) {
	return (
		<>
			<td className="px-6 py-4 whitespace-nowrap">
				<input
					className="p-1 m-2 focus:outline-none focus:ring-red-600 focus:ring-2 block w-full shadow-md sm:text-sm border-red-300 rounded-md"
					name="name"
					value={person.name}
					onChange={handleChange}
					placeholder="naam"
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<input
					className="p-1 m-2 focus:outline-none focus:ring-red-600 focus:ring-2 block w-full shadow-md sm:text-sm border-red-300 rounded-md"
					name="age"
					value={person.age}
					onChange={handleChange}
					type="number"
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<input
					className="p-1 m-2 focus:outline-none focus:ring-red-600 focus:ring-2 block w-full shadow-md sm:text-sm border-red-300 rounded-md "
					name="startAge"
					value={Number(person.startAge) === 0 ? '' : person.startAge}
					onChange={handleChange}
					type="number"
					placeholder={person.age}
				/>
			</td>
			<td className="px-6 py-4 whitespace-nowrap">
				<div class="flex items-center">
					<button
						type="button"
						aria-pressed="false"
						aria-labelledby="toggleLabel"
						className={
							(person.chargeable ? 'bg-red-400' : 'bg-gray-200') +
							' relative inline-flex place-self-center flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
						}
						onClick={(evt) => {
							if (person.chargeableCanChange) {
								evt.target = {
									name: 'chargeable',
									type: 'checkbox',
									value: !person.chargeable,
								};
								handleChange(evt);
							} else {
								evt.preventDefault();
								return true;
							}
						}}
					>
						{/* <span class="sr-only">Use setting</span> */}
						{person.chargeableCanChange ? (
							<span
								aria-hidden="true"
								className={
									(person.chargeable ? 'translate-x-5' : 'translate-x-0') +
									' pointer-events-none  inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
								}
							></span>
						) : (
							''
						)}
					</button>
				</div>
			</td>
		</>
	);
}
