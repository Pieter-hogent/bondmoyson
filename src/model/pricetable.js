import { dentaplan } from './dentaplan';
import { viviplan } from './viviplan';
import { kliniplan } from './kliniplan';
import { kliniplanplus } from './kliniplanplus';

const bijdrage = [{ start: 999, from: 0, to: 999, price: 89.76 }];
const zorgkas = [
	{ start: 999, from: 0, to: 25, price: 0 },
	{ start: 999, from: 26, to: 999, price: 54 },
];
const prices = {
	bijdrage,
	zorgkas,
	kliniplan,
	kliniplanplus,
	dentaplan,
	viviplan,
};

export const getInsurancePrice = (plan, age, startAge = null) => {
	if (!age) return 0;
	if (!startAge) startAge = age;
	if (!prices[plan]) {
		console.error(`I do not have prices for ${plan} (got: ${prices.keys()})`);
		return 0;
	}
	for (let price of prices[plan]) {
		if (
			(!price.start || Number(startAge) <= Number(price.start)) &&
			((!price.to && Number(age) === Number(price.from)) ||
				(Number(age) >= Number(price.from) && Number(age) <= Number(price.to)))
		) {
			return price.price;
		}
	}
	console.error(
		`Could not find a price for age ${age} in ${plan} (with start age ${startAge})`
	);
	return 0;
};

export const calculateTotal = (person) => {
	let total = 0;
	Object.keys(person.insurances).map((ins, idx) => {
		if (person.insurances[ins]) {
			total += getInsurancePrice(ins, person.age, person.startAge);
		}
	});
	// if (person.age >= 26) total += zorgkas;
	// if (person.chargeable) total += ziekenfondsbijdrage;
	return total;
};
