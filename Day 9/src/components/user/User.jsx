import { useParams } from 'react-router';

export default function User() {
	const { userid } = useParams();

	return (
		<>
			<div className='bg-gray-700 text-white font-["Times_New_Roman"] min-h-[10vh] flex justify-center items-center text-3xl font-bold'>
				User : {userid}
			</div>
		</>
	);
}
