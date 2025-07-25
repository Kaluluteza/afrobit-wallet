import React from 'react';

const WalletActionCard = ({ title, icon, onSubmit }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64 mb-4">
      <div className="flex items-center justify-center text-2xl mb-4">
        <span className="mr-2">{icon}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder={`Enter ${title} amount`}
          className="border rounded px-3 py-2 text-sm"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          {title}
        </button>
      </form>
    </div>
  );
};

export default WalletActionCard;

