import * as React from 'react';
import { people } from "../data";

export default function People() {
    const cardsPerRow = 3; // Maximum cards per row

    return (
        <div className='bg-slate-200 p-20'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {people.map((person, index) => (
                    <div key={index} className="bg-blue-800 border border-white rounded-lg p-4 flex-col">
                        <h2 className="text-white text-lg font-semibold">{person.name}</h2>
                        <div className="flex justify-center">
                            <img
                                src={person.image}
                                alt={`Mission`}
                                className="rounded-full w-1/2 h-1/2"
                            />
                        </div>
                        <h2 className="text-white text-lg font-semibold">{person.role}</h2>
                        <div className="text-container overflow-scroll no-scrollbar">
                            <p className="text-white text-xl overflow-y-auto">{person.bio}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
