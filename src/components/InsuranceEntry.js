export default function InsuranceEntry({ price, active, toggle }) {
	let tdCssClass = active && price !== 0 ? ' bg-red-200' : ' bg-gray-50 ';
	let spanCssClass = price === 0 ? 'opacity-40' : '';
	return (
		<td className={tdCssClass + ' px-6 py-4 whitespace-nowrap'}>
			<span
				className={spanCssClass + ' inline-grid grid-rows-3 gap-y-2 p-2 m-2'}
				onClick={toggle}
			>
				<span className="font-mono"> € {price.toFixed(2)} / j</span>
				<span className="font-mono"> € {(price / 4).toFixed(2)} / 3m</span>
				<span className="font-mono"> € {(price / 12).toFixed(2)} / m</span>
			</span>
		</td>
	);
}
