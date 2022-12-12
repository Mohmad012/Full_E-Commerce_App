import {lazy , Suspense} from "react"

import Spinner from "components/Spinner";
const RegisterContainer = lazy(() => import('containers/Register'));
const Header = lazy(() => import('layouts/Header'));

const Register = () => (
	<Suspense fallback={<Spinner />}>
		<Header addLogoOnly={true} />
		<RegisterContainer />
	</Suspense>
)

export default Register;
