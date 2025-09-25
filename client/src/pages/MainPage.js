import TableWhole from '../components/TableWhole';
import '../styles/Pages.css';

// Initial Page
function MainPage() {
  return (
    <div className="page">
      <h1>Customer Database</h1>
      
      <TableWhole />
    </div>
  );
}
export default MainPage;
