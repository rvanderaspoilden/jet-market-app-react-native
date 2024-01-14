import {useEffect, useState} from "react";
import {Spaceship} from "../models/spaceship.model";
import {ALL_TYPE} from "../constants/Common";

const useSpaceships = () => {
    const [spaceships, setSpaceships] = useState<Array<Spaceship>>(() => []);
    const [types, setTypes] = useState<Array<string>>(() => []);

    useEffect(() => {
        const data: Array<Spaceship> = [
            {
                "name": "Galactic Cruiser",
                "price": 150000,
                "description": "Un vaisseau spacieux et confortable, idéal pour les longs voyages interstellaires. Parfait pour les explorateurs.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                "type": "Exploration"
            },
            {
                "name": "Starlight Speedster",
                "price": 80000,
                "description": "Vaisseau rapide et maniable, parfait pour les courses spatiales. Son design futuriste en fait un incontournable pour les pilotes audacieux.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/2.jpg?alt=media&token=8ad982ac-3d5f-458c-b2ea-2700b11623bd',
                "type": "Course"
            },
            {
                "name": "Cosmic Explorer",
                "price": 120000,
                "description": "Explorez les confins de l'univers avec ce vaisseau équipé des dernières technologies d'exploration. Conçu pour les aventuriers intrépides.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/3.jpg?alt=media&token=b04ebdc9-eb26-4489-bfb8-e26a1c680019',
                "type": "Exploration"
            },
            {
                "name": "Nebula Nomad",
                "price": 100000,
                "description": "Vaisseau polyvalent adapté à toutes les missions. De l'exploration à la contrebande, le Nebula Nomad répond à tous vos besoins.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/8.jpg?alt=media&token=9a8efc29-207d-4126-a1db-b9f25dc6d257',
                "type": "Polyvalent"
            },
            {
                "name": "Quasar Queen",
                "price": 180000,
                "description": "Un vaisseau royal pour les commandants exigeants. Luxe, confort et puissance combinés dans un design élégant.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/7.jpg?alt=media&token=a1bf4656-86b0-4ee4-b4f8-bc4f29e3a8cf',
                "type": "Luxe"
            },
            {
                "name": "Stellar Shuttle",
                "price": 60000,
                "description": "Vaisseau compact idéal pour les déplacements rapides entre planètes. Parfait pour les commerçants et les hommes d'affaires interstellaires.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/4.jpg?alt=media&token=af0c1731-7658-40e1-a6de-645be20970c0',
                "type": "Transport"
            },
            {
                "name": "Astro Arcadia",
                "price": 200000,
                "description": "Une oasis spatiale avec des installations de loisirs à bord. Vivez le confort ultime lors de vos voyages à travers les étoiles.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/6.jpg?alt=media&token=b4c50b55-f9f5-4bf0-ae89-0acd9d8d6ade',
                "type": "Luxe"
            },
            {
                "name": "Lunar Lancer",
                "price": 90000,
                "description": "Vaisseau de combat agile avec des capacités de tir avancées. Parfait pour les missions militaires ou la chasse aux primes intergalactiques.",
                "creation_date": new Date(),
                "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/5.jpg?alt=media&token=1541a9ca-e41e-4dc5-8213-c3eb3dac1143',
                "type": "Combat"
            }
        ];
        setSpaceships(data);
        setTypes([ALL_TYPE, ...new Set(data.map(x => x.type))]);
    }, []);

    return {
        spaceships,
        types
    };
}

export default useSpaceships;
