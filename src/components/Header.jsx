import React from "react";

function Header() {
  return (
    <div className="fixed w-screen h-[10vh] text-xl flex justify-between items-center px-4 bg-purple-600 opacity-[90%] text-yellow-200 rounded-lg">
      <div>DEVFEST</div>
      <div className="flex items-center gap-4">
        <div>Events</div>
        <div>Past Events</div>
        <div>FAQs</div>
        <div>About Us</div>
      </div>
    </div>
  );
}

export default Header;
