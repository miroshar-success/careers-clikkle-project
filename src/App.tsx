import { lazy } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortalPage from './portalpages/portalPage';
import Aws from './portalpages/aws'
import Fed from './portalpages/fed';
import RootContainer from './globals/root';
import DataArchitect from './portalpages/dataArchitect';
import MManager from './portalpages/mManager';
import GDesigner from './portalpages/gDesigner';
import SocialMediaManager from './portalpages/scm';
import DigitalA from './portalpages/DigitalA';
import SeniorContentManager from './portalpages/sMManager';
import Bsa from './portalpages/bsa';
import ApplyForJob from './pages/ApplyForJob';


const Home = lazy(() => import('./pages/home'));


const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <RootContainer>
          <Routes>
            <Route path='/' Component={Home} />
            <Route path="/portalPage" element={<PortalPage />} />
            <Route path="/frontEndDeveloper" element={<Fed />} />
            <Route path="/awsPlatformEngineer" element={<Aws />} />
            <Route path="/dataArchitectEngineer" element={<DataArchitect />} />
            <Route path="/marketingManager" element={<MManager />} />
            <Route path="/graphicsDesigner" element={<GDesigner />} />
            <Route path="/socialMediaManager" element={<SocialMediaManager />} />
            <Route path="/digitalAnalytics" element={<DigitalA />} />
            <Route path="/seniorContentManager" element={<SeniorContentManager />} />
            <Route path="/businessSystemAnalyst" element={<Bsa />} />
            <Route path='/apply-for-job' element={<ApplyForJob />} />
          </Routes>
        </RootContainer>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
