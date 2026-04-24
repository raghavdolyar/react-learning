import './Card.css'

export default function Card({ login, avatar_url, html_url, type, user_view_type }) {
    return (
        <div className='card-container'>

            <div className='image-box'>
                <img src={avatar_url}></img>
            </div>

            <a href={html_url} target='__blank'>{login}</a>

            <p className={`type ${type.toLowerCase()}`}>{type}</p>

            <p className={`view-type ${user_view_type.toLowerCase()}`}>{user_view_type}</p>

        </div>
    );
}