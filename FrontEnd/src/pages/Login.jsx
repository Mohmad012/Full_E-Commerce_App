import {lazy , Suspense} from "react"

import Spinner from "components/Spinner";
const LoginContainer = lazy(() => import('containers/Login'));
const Header = lazy(() => import('layouts/Header'));

const Login = () => (
	<Suspense fallback={<Spinner />}>
		<Header addLogoOnly={true} />
		<LoginContainer />
	</Suspense>
)

export default Login;
