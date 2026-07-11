export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Sarlavha */}
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      
      {/* Statistika kartalari (Grid tizimi) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="text-sm font-medium text-gray-500">Jami foydalanuvchilar</h5>
          <p className="text-2xl font-bold">1,250</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="text-sm font-medium text-gray-500">Bugungi sotuvlar</h5>
          <p className="text-2xl font-bold">45</p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
          <h5 className="text-sm font-medium text-gray-500">Daromad</h5>
          <p className="text-2xl font-bold">$12,400</p>
        </div>
      </div>

      {/* Asosiy qism */}
      <div className="p-6 bg-white border border-gray-200 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">So'nggi harakatlar</h2>
        <p className="text-gray-600">
    
        </p>
      </div>
    </div>
  );
}