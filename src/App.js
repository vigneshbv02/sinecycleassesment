import Timeline from './components/Timeline';

function App() {

  const sample1 = ['Sample 1','Sample 2','Sample 3','Sample 4','Sample 5','Sample 6','Sample 7'];
  const sample2 = [['Sample1.1','Sample1.2','Sample1.3'],['Sample2.1','Sample2.2','Sample2.3'],['Sample3.1','Sample3.2','Sample3.3'],['Sample4.1','Sample4.2','Sample4.3']];
  const sampleColor2 = ['green','blue','red','grey'];

  const sample3 = [['Sample1.1','Sample1.2','Sample1.3'],['Sample2.1','Sample2.2','Sample2.3'],['Sample3.1','Sample3.2','Sample3.3'],['Sample4.1','Sample4.2','Sample4.3']];

  return (
    <div className="App">
      <Timeline data={sample1}/>
      <Timeline data={sample2} color={sampleColor2}/>
    </div>
  );
}

export default App;
