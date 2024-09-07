export const FooterComponent = () => {
  return (
    <footer className="w-full h-44 flex flex-col items-center justify-center py-4">
      <div className="flex items-center justify-center mb-2">
        <h4 className="flex items-center gap-x-1 text-sm text-gray-500">
          <span>Caverna</span>
          <span className="font-bold">-</span>
          <span>Ivan Miranda</span>
        </h4>
      </div>

      <div className="flex items-center justify-center gap-x-4 text-sm text-gray-500">
        <a
          href="https://www.linkedin.com/in/mirandaivan"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          Linkedin
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="https://ivan-miranda-portfolio.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          Portfolio
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a
          href="https://instagram.com/mirandevv"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          Instagram
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </footer>
  );
};
