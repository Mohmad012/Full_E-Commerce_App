import {lazy , Suspense} from "react"

import Spinner from "components/Spinner";
const FavoriteContainer = lazy(() => import('containers/Favorite'));

const Favorite = () => (
	<Suspense fallback={<Spinner />}>
		<FavoriteContainer />
	</Suspense>
)

export default Favorite;
