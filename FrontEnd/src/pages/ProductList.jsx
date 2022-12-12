import {lazy , Suspense} from "react"

import Spinner from "components/Spinner";
const ProductListContainer = lazy(() => import('containers/ProductList'));

const ProductList = () => (
	<Suspense fallback={<Spinner />}>
		<ProductListContainer />
	</Suspense>
)

export default ProductList;
