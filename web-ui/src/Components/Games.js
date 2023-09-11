import * as React from 'react';
import { games } from "../data";

export default function MissionStatement() {
    return (
        <div className="flex flex-col items-center">
            {games.map((game) => (
                <div
                    className="relative bg-white bg-opacity-80 rounded-lg shadow-lg w-4/5 p-10"
                    key={game.id} // Add a unique key to each game element
                >
                    <div className="p-6 flex justify-center">
                        <div className="relative">
                            <img
                                src={game.image}
                                alt={`Mission`}
                                className="rounded-3xl object-cover"
                            />
                            <div className="bg-black bg-opacity-80 rounded-3xl absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white text-xl ">{game.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
