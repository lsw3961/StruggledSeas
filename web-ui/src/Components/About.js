import * as React from 'react';
import { about } from "../data";

export default function About() {
    return (
        <div className='bg-neutral-200'>
            <div className="flex flex-col items-center">
                {about.map((item) => (
                        <div className="p-6 flex flex-col sm:flex-row items-center">
                            <div className="p-10 w-full text-center">
                                <p className="text-xl mb-2">{item.about}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
