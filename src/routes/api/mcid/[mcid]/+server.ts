import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }): Promise<Response> => {
	let result: {
		mcid?: string;
		message?: string;
		type?: string;
	};
	result = {};

	const mcid_check = await fetch(`https://api.mojang.com/users/profiles/minecraft/${params.mcid}`);
	if (mcid_check.status == 200) {
		const mcid_check_body = await mcid_check.json();
		if (mcid_check_body.name && mcid_check_body.id) {
			result.mcid = mcid_check_body.name
			if (mcid_check_body.name == params.mcid) {
				result.type = "SUCCESS"
			} else {
				result.type = "WARNING"
				result.message = `[mcid_check] maybe?: ${mcid_check_body.name}`
			}
		} else {
			result.type = "ERROR"
			result.message = `[mcid_check] unknown options`
		}
	} else if (mcid_check.status == 404) {
		result.type = "ERROR"
		result.message = `[mcid_check] not found: "${params.mcid}"`
	} else {
		result.type = "ERROR"
		result.message = `[mcid_check] api error code: ${mcid_check.status}`
	}
	return json(result);
};