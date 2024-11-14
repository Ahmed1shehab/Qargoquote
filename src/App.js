import { useState } from "react";
import "./App.css";
import { Header, Footer, Form } from "./components";
import { Allroutes } from "./routes/Allroutes";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <div>
      <Header openForm={openForm} />
      <Allroutes />
      <Footer />
      <Form isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
    </div>
  );
}

export default App;
