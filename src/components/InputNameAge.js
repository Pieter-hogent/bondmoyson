export default function InputNameAge({ handleChange, person }) {
	return (
		<>
			<td className="px-6 py-4 whitespace-nowrap">
				<input
					className="p-1 m-2 focus:outline-none focus:ring-red-600 focus:ring-2 block w-full shadow-md sm:text-sm border-red-300 rounded-md"
					name="name"
					value={person.name}
					onChange={handleChange}
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
					value={person.startAge === 0 ? '' : person.startAge}
					onChange={handleChange}
					type="number"
				/>
			</td>
		</>
	);
}
