import type { PageServerLoad, Actions } from './$types';
import supabase from '$lib/db';

export const load: PageServerLoad = async () => {
	const data = await supabase.auth.session();
	console.log(data);

	return {
		data: data?.user?.email
	};
};
