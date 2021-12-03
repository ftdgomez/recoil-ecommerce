import { atom } from 'recoil';

export const cartState = atom({
	key: 'cart',
	default: {
		items: [],
		user: null,
		show: false,
	}
})


export function toggleCart(cart: any, setCart: any) {
	setCart({
		...cart,
		show: !cart.show
	})
}

export function addToCart(cart: any, setCart: any, product: any) {
	const productIsInCart = cart.items.find((item: any) => item.id === product.id)
	if (!productIsInCart) {
		setCart({
			...cart,
			items: [...cart.items, product]
		})
	} else {
		alert('Product is already in cart')
	}
}

export function removeFromCart(cart: any, setCart: any, product: any) {
	setCart({
		...cart,
		items: cart.items.filter((item: any) => item.id !== product.id)
	})
}

export function updateCart(cart: any, setCart: any, product: any, quantity: any) {
	const productIsInCart = cart.items.find((item: any) => item.id === product.id)
	if (productIsInCart) {
		setCart({
			...cart,
			items: cart.items.map((item: any) => {
				if (item.id === product.id) {
					return {
						...item,
						quantity: quantity
					}
				}
				return item
			})
		})
	}
}


