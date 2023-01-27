import { Footer } from '../footer/footer';
import { Header } from '../header/header';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <div className="app container">{children}</div>
            <Footer></Footer>
        </>
    );
}
