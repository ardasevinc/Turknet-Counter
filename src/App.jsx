import Counter from "./components/Counter";
function App() {
  return (
    <main className="flex justify-center items-center h-screen">
      <div className="card card-bordered w-5/6 max-w-sm md:max-w-2xl md:h-2/5 2xl:h-1/2 h-fit bg-primary-focus">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl sm:text-4xl lg:text-6xl 2xl:text-5xl text-center">
            Turknet Counter
          </h2>
          <Counter />
        </div>
      </div>
    </main>
  );
}

export default App;
