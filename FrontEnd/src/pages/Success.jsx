import {lazy , Suspense} from "react"
import Spinner from "components/Spinner";
const SuccessContainer = lazy(() => import('containers/Success'));

const Success = () => (
	<Suspense fallback={<Spinner />}>
		<SuccessContainer />
	</Suspense>
)

export default Success;
