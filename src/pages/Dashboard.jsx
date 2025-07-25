import WalletActionCard from '../components/WalletActionCard'

export default function Dashboard() {
  return (
    <div className="p-4 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold">Afrobit Wallet</h1>
        <p className="text-gray-400 text-sm md:text-lg">Send • Receive • Convert • Transact</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <WalletActionCard icon="📤" color="text-green-400" label="Send" path="/send" />
        <WalletActionCard icon="📥" color="text-blue-400" label="Receive" path="/receive" />
        <WalletActionCard icon="🔄" color="text-yellow-400" label="Convert" path="/convert" />
        <WalletActionCard icon="💰" color="text-purple-400" label="Transact" path="/transact" />
      </div>

      <div className="mt-8 bg-gray-800 rounded-xl h-48 md:h-64 p-4">
        <p className="text-center text-gray-300">[Activity Graph Placeholder]</p>
      </div>
    </div>
  )
}

