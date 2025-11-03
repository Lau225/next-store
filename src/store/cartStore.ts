import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export const useCartStore = create()(
    persist(
        (set) => ({
            cartList: [],
            addToCart: (list: any[]) => set((state: any) => ({
                cartList: [...state.cartList, list]
            })),
            removeFromCart: (index: number) => set((state: any) => {
                const newCartList = [...state.cartList];
                newCartList.splice(index, 1);
                return { cartList: newCartList }
            }),
            isItemInCart: (name: string, selectedVariant: string): number => {
                return ((useCartStore.getState()) as any).cartList.findIndex((item: any) => item.product.name === name && item.selectVariant === selectedVariant);
            },
            updateQuantity: (index: number, quantity: number) => set((state: any) => {
                const newCartList = [...state.cartList];
                newCartList[index].quantity = quantity;
                return { cartList: newCartList }
            })
        }),
        {
            name: 'cart-storage'
        }
    )
)
