import { useEffect } from 'react';

import logo from "/assets/logo.png";
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar"

export default () => {
  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.querySelector('.nav-bar');
      if (navBar) {
        navBar.classList.toggle('scrolled', window.scrollY > navBar.clientHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 return (
  <nav className="nav-bar" >
  <div className="flex items-center">
    <Avatar className="w-20 h-20 rounded-none">
      <AvatarImage src={logo} alt="@logo" />
    </Avatar>
    <span className="ml-4 text-lg font-bold">Forever Flowers</span>
  </div>
  <div className="flex-grow"></div> {/* Spacer */}

  <div className="flex space-x-2 md:space-x-4 lg:space-x-6">
  <a href="/" className="hover:text-secondary">Home</a>
    <a href="/about" className="hover:text-secondary">About</a>
    <a href="/contact" className="hover:text-secondary">Contact</a>
  </div>
</nav>
 )

};