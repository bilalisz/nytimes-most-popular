import React from "react";

const AppFooter = () => {
  return (
    <footer className="bg-slate-300 p-5 2xl:container 2xl:mx-auto text-white py-8">
      <div className="container mx-auto px-4">
        <p className="text-center">
          © {new Date().getFullYear()} NY Times Viewer
        </p>
      </div>
    </footer>
  );
};

export default AppFooter;
