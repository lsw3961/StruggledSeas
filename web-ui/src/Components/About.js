import * as React from 'react';
import { about } from "../data";

export default function About() {
    return (
        <div id='About' className='bg-slate-200'>
            <div className="flex flex-col items-center">
                {about.map((item) => (
                    <div>
                        <h2 className="text-black text-3xl font-lora font-bold mt-3">{item.title}</h2>
                        <div className="p-6 flex flex-col sm:flex-row items-center">
                            <div className="p-10 w-full text-center">
                                <p className="text-xl font-lora mb-2">{item.about}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}
