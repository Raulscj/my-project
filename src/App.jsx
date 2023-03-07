import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <div className="flex flex-row bg-zinc-600 h-screen justify-between text-center">
      {/* <Header className="text-center w-1/4 fixed" /> */}
      {/* COMPONENTE A MOSTRAR */}
      <AppRoutes />
    </div>
  );
}

export default App;
