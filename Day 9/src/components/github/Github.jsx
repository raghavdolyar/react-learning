import { useLoaderData } from 'react-router';

export function Github() {
	const data = useLoaderData();

	return (
		<>
			<div className='bg-gray-800 text-white font-["Times_New_Roman"] min-h-[10vh] text-3xl font-bold'>
				Github followers : {data.followers}
				<img src={data.avatar_url} alt='avatar' width={200} />
			</div>
		</>
	);
}
