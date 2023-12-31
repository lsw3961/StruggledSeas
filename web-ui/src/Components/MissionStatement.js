import * as React from 'react';
import { mission } from "../data";

export default function MissionStatement() {
  return (
    <div id='MissionStatement' className="flex flex-col items-center p-10">
      {mission.map((item) => (
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg w-4/5 p-10 ">
          <div className="p-6 flex flex-col sm:flex-row items-center">
            <div className="sm:w-1/2 text-center mb-4 sm:mb-0">
              <p className="text-6xl mb-2 font-lora font-bold">{item.mission}</p>
            </div>
            <div className="sm:w-1/2 sm:ml-4 flex justify-center">
              <img
                src={item.image}
                alt={`Mission`}
                className="rounded-3xl w-full h-1/6 object-cover"
              />
            </div>
          </div>
          <p className='text-3xl font-lora font-bold'><i>{item.tagline}</i></p>
        </div>
      ))}
    </div>
  );
}
