
import React from 'react';
import './AddPackage.css';
import AddPackageForm from '../../components/AddPackageForm/AddPackageForm';

const App = () => {
  return (
    <div className="App">
      <h1 className='add-package-heading'>Add Package</h1>
      <AddPackageForm />
    </div>
  );
}
export default App;
