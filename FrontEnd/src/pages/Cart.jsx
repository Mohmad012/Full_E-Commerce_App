import {lazy , Suspense} from "react"

import Spinner from "components/Spinner";
const CartContainer = lazy(() => import('containers/Cart'));

const Cart = () => (
	<Suspense fallback={<Spinner />}>
		<CartContainer />
	</Suspense>
)

export default Cart;
