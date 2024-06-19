
import React from 'react';

const ViewAllChat = () => {
  const chats = [
    { id: 1, name: 'User 1', message: 'Hello!', time: '2m' },
    { id: 2, name: 'User 2', message: 'How are you?', time: '5m' },
    { id: 3, name: 'User 3', message: 'Good morning', time: '10m' },
    // Add more chat data as needed
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Chats</h2>
      <div className="divide-y divide-gray-200">
        {chats.map((chat) => (
          <div key={chat.id} className="py-4 flex items-center">
            <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">{chat.name}</div>
              <div className="text-sm text-gray-500">{chat.message}</div>
            </div>
            <div className="ml-auto text-xs text-gray-400">{chat.time}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="text-blue-500 hover:underline">View All</button>
      </div>
    </div>
  );
};

export default ViewAllChat;
