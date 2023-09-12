import * as React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { people } from "../data";

export default function People() {
    const cardsPerRow = 3; // Maximum cards per row

    return (
        <div id="People" className='bg-slate-200 p-20 font-lora'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {people.map((person, index) => (
                    <div key={index} className="bg-blue-800 border border-white rounded-lg p-4 flex-col">
                        <h2 className="text-slate-200 text-lg font-semibold">{person.name}</h2>
                        <div className="flex justify-center">
                            <img
                                src={person.image}
                                alt={`Mission`}
                                className="rounded-full w-60 h-70"
                            />
                        </div>
                        <h2 className="text-slate-200 text-lg font-semibold">{person.role}</h2>
                        <div className="text-container overflow-scroll no-scrollbar">
                            <p className="text-slate-200 text-xl overflow-y-auto">{person.bio}</p>
                        </div>
                        <a href={person.link} target="_blank" class="block m-1 text-3xl lg:inline-block lg:mt-0 text-slate-200 hover:text-black">
                            <AiFillLinkedin />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
