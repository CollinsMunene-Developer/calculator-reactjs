import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import CalcProvider from './Context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "-"],
  [4, 5, 6, "*"],
  [3, 2, 1, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <Screen/>
        <ButtonBox>
          {btnValues.flat().map((btn, i) => (
            <Button
             value={btn}
             key={i}
            />
          ))}

        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App;
