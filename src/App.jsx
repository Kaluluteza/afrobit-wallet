import React from 'react';
import WalletDashboard from "./components/WalletDashboard";
import ActivityChart from "./components/ActivityChart";
import AfroBitChart from "./components/AfroBitChart";
import WalletActionCard from './components/WalletActionCard';
// because it's in the same folder


function App() {
  const handleSend = (e) => {
    e.preventDefault();
    alert('Send submitted!');
  };

  const handleReceive = (e) => {
    e.preventDefault();
    alert('Receive submitted!');
  };

  const handleConvert = (e) => {
    e.preventDefault();
    alert('Convert submitted!');
  };

  const handleTransact = (e) => {
    e.preventDefault();
    alert('Transact submitted!');
  };

  return (
    <>
      <div className="App">
        <WalletDashboard />
      </div>

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-8 text-center text-indigo-800">
          Afrobit Wallet
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <WalletActionCard title="Send" icon="📤" onSubmit={handleSend} />
          <WalletActionCard title="Receive" icon="📥" onSubmit={handleReceive} />
          <WalletActionCard title="Convert" icon="🔄" onSubmit={handleConvert} />
          <WalletActionCard title="Transact" icon="💰" onSubmit={handleTransact} />
        </div>
             <div className="w-full max-w-4xl mt-8">
          <AfroBitChart />
        </div>

        <ActivityChart />
      </div>
    </>
  );
}

export default App;

