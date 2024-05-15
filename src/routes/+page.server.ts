import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const session = await event.locals.auth();
		
		const formData = await event.request.formData();
		console.log(formData.keys);
		const work_start = formData.get('work-start');
		const work_time = formData.get('work-time');
		const skill = formData.get('skill');
		const knowledge = formData.get('knowledge');
		const pc_spec = formData.get('pc-spec');
		const files = formData.get('files');
		const pr = formData.get('pr');
		const other = formData.get('other');

		if (
			session?.user &&
			work_start &&
			work_time &&
			skill &&
			knowledge && 
			pc_spec &&
			files &&
			pr &&
			other
		) {
			console.log(session)
			return { success: true };
		}
		return fail(400, {
			missing: true
		});

	}
} satisfies Actions;