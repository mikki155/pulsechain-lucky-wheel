import './App.css';
import { Wheel } from 'react-custom-roulette';
import { bigNumDivisor, contractAbi, contractAddress, minimumSpinCost, segments } from './constants';
import Web3 from "web3";
import { useEffect, useState } from 'react';
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types';

function App() {

  const [balanceOf, setBalanceOf] = useState<number>(0);
  const [winningAmount, setWinningAmount] = useState<number>(0);
  const [winningSegmentIndex, setWinningSegmentIndex] = useState<number>(0);
  const [mustSpin, setMustSpin] = useState(false);

  let web3 = new Web3(window.ethereum);
  window.ethereum.enable();

  const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

  async function fetchBalanceOf() {
    const accounts = await web3.eth.getAccounts();
    const result = await contractInstance.methods.getBalanceOf().call({from: accounts[0]});
    return result;
  }

  async function fetchLatestWinningNumber() {
    const accounts = await web3.eth.getAccounts();
    const result = await contractInstance.methods.getLatestWinningNumber().call({from: accounts[0]});
    return result;
  }

  async function fetchSpinReward() {
    const accounts = await web3.eth.getAccounts();
    const minSpinCostAsBigInt = web3.utils.toBigInt(minimumSpinCost*bigNumDivisor);
    await contractInstance.methods.spin().send({from: accounts[0], value: minSpinCostAsBigInt.toString()});

    const result = await fetchBalanceOf() as unknown as string;
    const newBalance = parseFloat(result) / bigNumDivisor; 
    
    const newWinningNum = await fetchLatestWinningNumber() as unknown as number;
    setWinningAmount(newWinningNum);

    setBalanceOf(newBalance);

    return;
  }

  async function withdraw() {
    const accounts = await web3.eth.getAccounts();
    const result = await contractInstance.methods.withdraw().send({from: accounts[0]});
    setWinningAmount(0);
  }

  setInterval(async () => {
    const result = await fetchBalanceOf() as unknown as string;
    const newBalance = parseFloat(result) / bigNumDivisor; 
    setBalanceOf(newBalance);
  }, 3000);

  function findRandomIndex(array: WheelData[], winningAmountString: string) {
    const indices: number[] = new Array<number>();

    array.forEach((value: WheelData, index: number) => {
      if (value.option === winningAmountString) indices.push(index)
    });

    const randomWinningIndex = Math.floor(Math.random() * indices.length);
    console.log(winningAmountString, indices, randomWinningIndex);
    return indices[randomWinningIndex];
  }

  useEffect(() => {
    if (winningAmount > 0) {
      setWinningSegmentIndex(findRandomIndex(segments, winningAmount.toString()));
      setMustSpin(true);
    }
  }, [winningAmount]);

  return (
    <div className="App-header">
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={winningSegmentIndex}
          data={segments}
          textColors={['#ffffff']}
          onStopSpinning={() => setMustSpin(false)}
        />
      </div>
    <button onClick={() => fetchSpinReward()}>Spin</button>
    <button onClick={() => withdraw()}>Withdraw</button>
    </div>
  );
}

export default App;
