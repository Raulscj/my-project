import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <div className="flex flex-row bg-zinc-600 h-screen justify-between ">
      {/* COMPONENTE A MOSTRAR */}
      <AppRoutes />
    </div>
  );
}

export default App;
