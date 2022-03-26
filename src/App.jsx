import './App.css';
import { getTypeByProvince, getPeopleByCountry } from './services/axios';
import FormComp from './components/Province/Province';
import Country from './components/Country/Country';
function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <FormComp
        label="Cantidad de personas que viven en una provincia determinada por tipo de dirección"
        placeHolder="Ingrese la provincia"
        getter={getTypeByProvince} />
      <Country
        label="Lista de personas por nombre del país en alguna de sus direcciones"
        placeHolder="Ingrese la país"
        getter={getPeopleByCountry} />
    </div>
  );
}

export default App;
