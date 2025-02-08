import { Product } from "@/type"

export const addToCart = (product: Product) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')

  const existingProductIndex = cart.findIndex(item => item._id === product._id)

  if (existingProductIndex > -1) {
    if (cart[existingProductIndex]?.inventory !== undefined) {
      cart[existingProductIndex].inventory += 1;
    }
  } else {
    cart.push({
      ...product, inventory: 1
    })
  }
  localStorage.setItem('cart', JSON.stringify(cart))
}

// Remove cart
export const removeFromCart = (productId: string) => {
  let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
  cart = cart.filter(item => item._id !== productId)
  localStorage.setItem('cart', JSON.stringify(cart))
}

// Update cart quantity
export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]')
  const productIndex = cart.findIndex(item => item._id == productId)

  if (productIndex > -1) {
    cart[productIndex].inventory = quantity;
    localStorage.setItem('cart', JSON.stringify(cart))
  }
}

// Get cart items
export const getCartItems = (): Product[] => {
  return JSON.parse(localStorage.getItem('cart') || '[]')
}
