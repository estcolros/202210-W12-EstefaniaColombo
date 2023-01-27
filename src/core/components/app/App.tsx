import React from 'react';
import Comunications from '../comunications/comunications';
import { Layout } from '../layout/layout';
import List from '../list/list';

function App() {
    return (
        <>
            <Layout>
                <List></List>
            </Layout>
            <Comunications></Comunications>
        </>
    );
}

export default App;
