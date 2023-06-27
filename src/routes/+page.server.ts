import type { PageServerLoad, Actions } from './$types';
import supabase from '$lib/db';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const data = await supabase.auth.session();
	console.log(data);

	return {
		data: data?.user
	};
};
export const actions: Actions = {
	default: async ({ request }) => {
		const data = await supabase.auth.user();
		if (data?.email) {
			await supabase.auth.signOut();
		} else {
			const { email, password } = Object.fromEntries(await request.formData());
			console.log(email, password);
			const { user, error } = await supabase.auth.signIn({
				email: String(email),
				password: String(password)
			});
			console.log(user);

			if (user) {
				throw redirect(302, '/');
			}
		}
	}
};
