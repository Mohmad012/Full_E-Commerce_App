import {lazy , Suspense} from "react"
import Spinner from "components/Spinner";
const Header = lazy(() => import('./Header'));
const Footer = lazy(() => import('./Footer'));

const Layout = ({children}) => {
  return (
    <Suspense fallback={<Spinner />}>
        <Header/>
        {children}
        <Footer/>
    </Suspense>
  )
}

export default Layout