const Page = () => {
  return (
    <div className="container section text-4xl sm:text-5xl md:text-7xl font-bold text-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <span className="text-blue-600 beiruti-600">
          وَأَحْسِنُوٓا۟ ۛ إِنَّ ٱللَّهَ يُحِبُّ ٱلْمُحْسِنِينَ
        </span>
        <span className="text-gray-400 dark:text-gray-600">
          And do good, for{" "}
          <span className="text-gray-500 dark:text-gray-400">Allah</span>{" "}
          certainly <span className="text-gray-500 dark:text-gray-400">loves</span> the good-doers.
        </span>
        <span className="text-gray-400 dark:text-gray-600 text-xl">
          {" "}
          - Quran 2:195
        </span>
      </div>
    </div>
  );
};

export default Page;
