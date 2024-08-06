import "./App.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

function App() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="lg:col-span-1">
            <Sidebar />
          </div>
          <div className="lg:col-span-3">
            <MainContent />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
