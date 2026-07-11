import "../globals.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex' }}>
      {/* Dashboard uchun umumiy bo'lgan Sidebar */}
      <aside style={{ width: '250px', borderRight: '1px solid #ccc' }}>
        <nav>
          <ul>
            <li>Analitika</li>
            <li>Sozlamalar</li>
            <li>Profil</li>
          </ul>
        </nav>
      </aside>

      {/* Asosiy dashboard sahifalari shu yerda yuklanadi */}
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}