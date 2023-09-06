import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function HomePage() {
	const supabase = createServerComponentClient({ cookies })
	const { data: posts } = await supabase.from('posts').select('*')

	return (
		<div>
			<h2>Hello world!</h2>

			<pre>{JSON.stringify(posts, null, 2)}</pre>
		</div>
	)
}
