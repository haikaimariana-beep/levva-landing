import { DorProvider } from './context/DorContext';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { Espelho } from './components/sections/Espelho';
import { Virada } from './components/sections/Virada';
import { GridDores } from './components/sections/GridDores';
import { ProvaViva } from './components/sections/ProvaViva';
import { ComoTrabalha } from './components/sections/ComoTrabalha';
import { EscadaCTA } from './components/sections/EscadaCTA';
import { Rodape } from './components/sections/Rodape';

function App() {
  return (
    <DorProvider>
      <Header />
      <main>
        <Hero />
        <Espelho />
        <Virada />
        <GridDores />
        <ProvaViva />
        <ComoTrabalha />
        <EscadaCTA />
      </main>
      <Rodape />
    </DorProvider>
  );
}

export default App;
