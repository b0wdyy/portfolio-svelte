<svelte:head>
	<title>Contact me | Portfolio</title>
	<meta name="description" content="Contact page of Software engineer Bodhi Vandael" />
	<meta
		name="keywords"
		content="contact, contact-page, portfolio, software, engineer, bodhi, vandael"
	/>
	<meta name="author" content="Bodhi Vandael" />
</svelte:head>

<main class="container mx-auto px-8 lg:px-0">
	<h1 class="mt-8 max-w-3xl text-5xl font-bold">
		Would love to hear your ideas, let's grab a coffee!
	</h1>

	<section class="mt-8">
		<form action="" class="mx-auto max-w-4xl">
			<div class="mb-6 flex flex-col-reverse gap-2">
				<input required type="text" name="name" id="name" placeholder="Name" class="rounded-md" />
				<label for="name" class="text-primary-dark dark:text-primary-light">Name</label>
			</div>

			<div class="mb-6 flex flex-col-reverse gap-2">
				<input
					required
					type="email"
					name="email"
					id="email"
					placeholder="Email"
					class="rounded-md"
				/>
				<label for="email" class="text-primary-dark dark:text-primary-light">Email</label>
			</div>

			<div class="mb-8 flex flex-col-reverse gap-2">
				<textarea
					name="message"
					id="message"
					cols="30"
					rows="10"
					placeholder="Message"
					class="rounded-md"
				/>
				<label for="message" class="text-primary-dark dark:text-primary-light">Message</label>
			</div>

			<button
				type="submit"
				class="rounded-full border border-amber-400 bg-amber-300 px-6 py-3 text-primary-light transition-colors dark:text-primary-dark dark:hover:bg-amber-400"
				>Send message
			</button>
		</form>
	</section>
</main>
