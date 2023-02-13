import "./App.css"
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import EntryPage from "./comonents/EntryPage";
import Home from "./comonents/Home";
import CMS from "./comonents/CMS";
import AddCms from "./comonents/AddCms";
import EditCms from "./comonents/EditCms";
import Collection from "./comonents/Collection";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EntryPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Collection />} />
        <Route path="/cms" element={<CMS />} />
        <Route path="/cms/add" element={<AddCms />} />
        <Route path="/cms/edit" element={<EditCms />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
