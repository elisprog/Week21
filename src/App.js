
import './App.css';
import { Chart } from "react-google-charts";
export const data = [
  ["Задача", "Часов в день"],
  ["Работа", 7],
  ["Сон", 10],
  ["Еда и отдых", 2],
  ["Учёба", 3],
  ["Душ и прогулка", 2],
];
export const options = {
  title: "Моя жизнь в процентах",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>
          Привет, вот моя жизнь:
        </h1>
        <Chart 
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
        />
      
      </header>
    </div>
  );
}

export default App;
