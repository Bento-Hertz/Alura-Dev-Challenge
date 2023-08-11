import Navigation from 'components/Navigation';
import ScrollToTop from 'components/ScrollToTop';
import CodeEditor from 'pages/CodeEditor';
import Community from 'pages/Community';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {

    return (
        <BrowserRouter>
            <Navigation />
            <ScrollToTop>
                <main>
                    <Routes>
                        <Route path='/'>
                            <Route index element={<Community />}/>
                            <Route path='code-editor' element={<CodeEditor />}/>
                        </Route>
                    </Routes>
                </main>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default Router;