import type { PageServerLoad, Actions } from './$types';
import supabase from '$lib/db';
import { redirect } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
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
};
