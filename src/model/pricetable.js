import { dentaplan } from './dentaplan';
import { viviplan } from './viviplan';
import { kliniplan } from './kliniplan';
import { kliniplanplus } from './kliniplanplus';

const prices = { kliniplan, kliniplanplus, dentaplan, viviplan };

export const getInsurancePrice = (plan, age, startAge = null) => {
	if (!age) return 0;
	if (!startAge) startAge = age;
	if (!prices[plan]) {
		console.error(`I do not have prices for ${plan} (got: ${prices.keys()})`);
		return 0;
	}
	for (let price of prices[plan]) {
		if (
			(!price.start || startAge < price.start) &&
			((!price.to && Number(age) === Number(price.from)) ||
				(age >= price.from && age <= price.to))
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
	return total;
};
