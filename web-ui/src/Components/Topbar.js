import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Topbar() {

  function scrollToElementById(id) {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }

  return (
    <nav class="flex items-center justify-between font-lora flex-wrap bg-blue-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <span class="font-bold text-black text-xl tracking-tight">A Milion Studios</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-white border-black hover:text-black hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 text-black font-serif font-bold hover:text-white mr-4"
            onClick={() => scrollToElementById("MissionStatement")}
          >
            Our Mission
          </a>
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black font-serif font-bold hover:text-white mr-4"
            onClick={() => scrollToElementById("About")}
          >
            About Us
          </a>
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black font-serif font-bold hover:text-white mr-4"
            onClick={() => scrollToElementById("Games")}
          >
            Games
          </a>
          <a href="#" class="block mt-4 lg:inline-block lg:mt-0 text-black font-serif font-bold hover:text-white"
            onClick={() => scrollToElementById("People")}
          >
            People
          </a>
        </div>
      </div>
    </nav>
  );
}
