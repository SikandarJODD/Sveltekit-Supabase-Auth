<script>
	import supabase from '$lib/db';
	
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content flex-col">
		<div class="card max-w-2xl shadow-2xl bg-base-100">
			<div class="card-body md:w-96">
				<div class=" my-1 text-center">
					<h1 class="font-bold text-primary md:text-2xl">Sign In</h1>
				</div>
				<form method="POST">
					<div class="form-control my-1">
						<label class="label" for="email">
							<span class="label-text">Email</span>
						</label>
						<input
							type="text"
							placeholder="email"
							id="email"
							class="input input-bordered input-info"
							name="email"
						/>
					</div>
					<div class="form-control my-1">
						<label class="label" for="password">
							<span class="label-text">Password</span>
						</label>
						<input
							type="text"
							id="password"
							placeholder="password"
							class="input input-bordered input-info"
							name="password"
						/>
					</div>
					<div class="form-control mt-6">
						<button class="btn btn-info" type="submit">Login</button>
					</div>
				</form>
				<div class="form-control mt-2">
					<a href="/signUp" class="btn btn-success btn-outline"> Sign up </a>
				</div>
			</div>
		</div>
	</div>
</div>
