function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="card card-bordered w-5/6 max-w-sm md:max-w-2xl md:h-2/5 2xl:h-1/2 h-72 bg-primary-focus">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl sm:text-4xl lg:text-6xl 2xl:text-5xl">
            Turknet Counter
          </h2>
          <div className="flex flex-col h-full">
            <p className="h-8/10 text-left flex flex-col justify-center md:justify-end sm:text-xl md:text-2xl">
              Excepteur eiusmod exercitation irure ex amet sunt excepteur in
              excepteur nulla ex officia.
            </p>
            <p className="h-2/10 flex flex-col justify-end text-sm sm:text-lg">
              Last Update: X
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
