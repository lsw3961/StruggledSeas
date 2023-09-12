import * as React from 'react';
import { games } from "../data";

export default function MissionStatement() {
    return (
        <div id='Games' className="flex flex-col items-center p-10">

            {games.map((game) => (
                <div
                    className="relative bg-white bg-opacity-80 rounded-lg shadow-lg w-4/5 p-10"
                    key={game.id} // Add a unique key to each game element
                >
                    <h2 className="text-black text-4xl font-lora font-bold">Our Games</h2>
                    <h2 className="text-black text-3xl font-lora font-bold">{game.name}</h2>
                        <div className="flex justify-center">
                            <img
                                src={game.image}
                                alt={`Mission`}
                                className="rounded-3xl object-cover w-1/3 h-2/3 p-3"
                            />
                        </div>
                    <p className="text-black text-xl font-lora ">{game.description}</p>

                </div>
            ))}
        </div>
    );
}
