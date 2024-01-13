import {useEffect, useState} from "react";
import {Spaceship} from "../models/spaceship.model";

const useSpaceships = () => {
    const [spaceships, setSpaceships] = useState<Array<Spaceship>>(() => []);

    useEffect(() => {
        setSpaceships([
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
                    "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                    "type": "Course"
                },
                {
                    "name": "Cosmic Explorer",
                    "price": 120000,
                    "description": "Explorez les confins de l'univers avec ce vaisseau équipé des dernières technologies d'exploration. Conçu pour les aventuriers intrépides.",
                    "creation_date": new Date(),
                    "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                    "type": "Exploration"
                },
                {
                    "name": "Nebula Nomad",
                    "price": 100000,
                    "description": "Vaisseau polyvalent adapté à toutes les missions. De l'exploration à la contrebande, le Nebula Nomad répond à tous vos besoins.",
                    "creation_date": new Date(),
                    "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                    "type": "Polyvalent"
                },
                {
                    "name": "Quasar Queen",
                    "price": 180000,
                    "description": "Un vaisseau royal pour les commandants exigeants. Luxe, confort et puissance combinés dans un design élégant.",
                    "creation_date": new Date(),
                    "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                    "type": "Luxe"
                },
                {
                    "name": "Stellar Shuttle",
                    "price": 60000,
                    "description": "Vaisseau compact idéal pour les déplacements rapides entre planètes. Parfait pour les commerçants et les hommes d'affaires interstellaires.",
                    "creation_date": new Date(),
                    "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                    "type": "Transport"
                },
                {
                    "name": "Astro Arcadia",
                    "price": 200000,
                    "description": "Une oasis spatiale avec des installations de loisirs à bord. Vivez le confort ultime lors de vos voyages à travers les étoiles.",
                    "creation_date": new Date(),
                    "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                    "type": "Luxe"
                },
                {
                    "name": "Lunar Lancer",
                    "price": 90000,
                    "description": "Vaisseau de combat agile avec des capacités de tir avancées. Parfait pour les missions militaires ou la chasse aux primes intergalactiques.",
                    "creation_date": new Date(),
                    "photo_link": 'https://firebasestorage.googleapis.com/v0/b/jetmarket-formation.appspot.com/o/1.jpg?alt=media&token=a8265153-16e2-4f6d-bbc5-4aee594cae87',
                    "type": "Combat"
                }
            ]);
    }, []);

    return {
        spaceships
    };
}

export default useSpaceships;
