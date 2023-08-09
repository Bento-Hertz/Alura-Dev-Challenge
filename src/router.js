import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import CodeEditor from 'pages/CodeEditor';
import Community from 'pages/Community';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {

    return (
        <BrowserRouter>
            <Sidebar />
            <Header />
            <main>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Community />}/>
                        <Route path='code-editor' element={<CodeEditor />}/>
                    </Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default Router;