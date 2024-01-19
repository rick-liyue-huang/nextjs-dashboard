import React from 'react';
import { ListTodo } from 'lucide-react';

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-start border shadow-sm p-4 bg-green-100 text-green-600 rounded-full uppercase">
          <ListTodo className="w-6 h-6 mr-2" />
          Task Management Dashboard
        </div>
        <h1 className="bg-gradient-to-b from-fuchsia-50 to-pink-100 text-2xl md:text-4xl text-center text-purple-500 rounded-md px-4 mb-6 max-w-xs">
          We can manage your team tasks
        </h1>
        <div className="text-xl md:text-2xl bg-gradient-to-r from-fuchsia-50 to-pink-100 text-blue-300 rounded-md py-2 w-fit">
          Efficient and Agile
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;
