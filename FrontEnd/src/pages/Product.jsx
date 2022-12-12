import {lazy , Suspense} from "react"

import Spinner from "components/Spinner";
const ProductContainer = lazy(() => import('containers/Product'));

const Product = () => (
	<Suspense fallback={<Spinner />}>
		<ProductContainer />
	</Suspense>
)

export default Product;
