import React from 'react';
import image from "./img/Pets.webp"
import './css/pets_stl.css';

function Info(props) {
    return (
        <div className='pets_block'>
            <h1 className='pets_title'>{props.title}</h1>
            <img src={props.poster} alt={`${props.title} Pets`} className='img_pets' />
            <p className='p_pets'><strong>Country of origin:</strong> {props.country}</p>
            <p className='p_pets'><strong>Breed type:</strong> {props.type}</p>
            <p className='pets_info'>{props.info}</p>
        </div>
    );
}

const Pets = () => {
    return (
        <Info
            title='German Shepherd'
            poster={image}
            country ='Germany'
            type = 'Service dog'
            info='Smart, obedient, with high security qualities, easy to train - this dog is suitable 
            for home keeping in the city or countryside, for service in various structures, and for sports. 
            The German Shepherd is a large dog. Height at the withers can vary from 55 to 65 centimeters. 
            The dog is proportionally built, athletic, muscular. There are short-haired and long-haired 
            varieties of German Shepherds. The most common species are black, black and tan, and zoned gray.'
        />
    );
}

export default Pets;
