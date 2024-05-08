import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const formData = await event.request.formData();
		const work_start = formData.get('work-start');
		const work_time = formData.get('work-time');
		const skill = formData.get('skill');
		const knowledge = formData.get('knowledge');
		const pc_spec = formData.get('pc-spec');
		const files = formData.get('files');
		const pr = formData.get('pr');
		const other = formData.get('other');

		// console.log('work_start', work_start);
		// console.log('work_time', work_time);
		// console.log('skill', skill);
		// console.log('knowledge', knowledge);
		// console.log('pc_spec', pc_spec);
		// console.log('files', files);
		// console.log('pr', pr);
		// console.log('other', other);

		const ok = true;

		if (!ok) {
			const data = {
				work_start,
				work_time,
				skill,
				knowledge,
				pc_spec,
				pr,
				other
			} as unknown as {
				work_start: string;
				work_time: string;
				skill: string;
				knowledge: string;
				pc_spec: string;
				pr: string;
				other: string;
			};
			return fail(400, {
				...data,
				missing: true
			});
		}

		return { success: true };
	}
} satisfies Actions;