import './style.css';

export default function Card({title, description, price, promotion}){
    return(
        <div className="card">
            <h1>{title}</h1>
            <p>{description}</p>
            <b>{price}</b>
            <p>{promotion == true?'Está em promoção': 'Não está em promoção'}</p>
        </div>
    );
}