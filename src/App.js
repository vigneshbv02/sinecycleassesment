import Timeline from './components/Timeline';
import './App.css';

function App() {

  const sample1 = ['Sample 1', 'Sample 2', 'Sample 3', 'Sample 4', 'Sample 5', 'Sample 6', 'Sample 7'];
  const sample2 = [
    { data: ['Sample1.1', 'Sample1.2', 'Sample1.3'], color: 'green' },
    { data: ['Sample2.1', 'Sample2.2', 'Sample2.3'], color: 'blue' },
    { data: ['Sample3.1', 'Sample3.2', 'Sample3.3'], color: 'red' },
    { data: ['Sample4.1', 'Sample4.2', 'Sample4.3'], color: 'grey' },
  ]

  const sample3 = [
    { data: ['Sample1.1', 'Sample1.2', 'Sample1.3'], color: 'green', label: 'Test 1' },
    { data: ['Sample2.1', 'Sample2.2', 'Sample2.3'], color: 'blue', label: 'Test 2' },
    { data: ['Sample3.1', 'Sample3.2', 'Sample3.3'], color: 'red', label: 'Test 3' },
    { data: ['Sample4.1', 'Sample4.2', 'Sample4.3'], color: 'grey', label: 'Test 4' },
  ]

  return (
    <div className="App">
        <Timeline data={sample1} />
        <Timeline data={sample2}  type={'right'}/>
        <Timeline data={sample2} pending={true} />
        <Timeline data={sample2} pending={true} pendingContent={"Recording"}/>
        <Timeline data={sample3} />
        <Timeline data={sample2} enableToggle={true} />
    </div>
  );
}

export default App;
