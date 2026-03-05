import { patchState, signalMethod, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product } from './models/product';
import { computed } from '@angular/core';
import { CartItem } from './models/cartItem';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { SignInDialog } from './components/sign-in-dialog/sign-in-dialog';
import { SignInParams, SignUpParams, User } from './models/user';
import { Router } from '@angular/router';
import { Order } from './models/order';

export type EcommerceState = {
    products: Product[];
    category: string;
    wishlistItems: Product[];
    cartItems: CartItem[];
    user: User | null;
    loading: boolean;
    selectedProductId: string | null;
}

const initialState: EcommerceState = {
    products: [
            {
                id: '1',
                name: 'Product 1',
                description: 'Product 1 description',
                price: 10,
                imageUrl: 'https://picsum.photos/200/300',
                rating: 4,
                reviewCount: 10,
                category: 'Electronics',
                inStock: true,
                },
                {
                id: '2',
                name: 'Product 2',
                description: 'Product 2 description',
                price: 20,
                imageUrl: 'https://picsum.photos/200/300',
                rating: 3,
                reviewCount: 5,
                category: 'Electronics',
                inStock: true,
                },
                {
                id: '3',
                name: 'Product 3',
                description: 'Product 3 description',
                price: 30,
                imageUrl: 'https://picsum.photos/200/300',
                rating: 5,
                reviewCount: 15,
                category: 'Electronics',
                inStock: false,
                },
                {
                id: '4',
                name: 'Product 4',
                description: 'Product 4 description',
                price: 40,
                imageUrl: 'https://picsum.photos/200/300',
                rating: 4,
                reviewCount: 20,
                category: 'Home',
                inStock: true,
                },
        ],
    category: 'all',
    wishlistItems: [],
    cartItems: [],
    user: null,
    loading: false,
    selectedProductId: null,
}

export const EcommerceStore = signalStore(
    {
        providedIn: 'root', //make the state globally available
    },
    withState(initialState),
    withComputed((state) => ({
        
        filteredProducts: computed(() => {
            console.log(state.category());
          if (state.category() === 'all') {
                return state.products();
            } else{
                return state.products().filter(product => product.category.toLowerCase() === state.category().toLowerCase());
            }  
          
        }),
        wishlistItemsCount: computed(() => {
            return state.wishlistItems().length;
        }),
        cartItemsCount: computed(() => {
            return state.cartItems().length;
        }),
        
        selectedProduct: computed(() => {
            console.log(state.products().find(product => product.id === state.selectedProductId()))
            return state.products().find(product => product.id === state.selectedProductId());
        }),
        
    
    })),
    withMethods((store, dialog = inject(MatDialog), router = inject(Router)) => ({
       setCategory: signalMethod<string>((category: string) => {
            patchState(store, {category});
        }),
        addToWishlist: signalMethod<Product>((product: Product) => {
           patchState(store, {wishlistItems: [...store.wishlistItems(), product]});
           alert('Product added to wishlist');
        }),
        removeFromWishlist: signalMethod<Product>((product: Product) => {
           patchState(store, {wishlistItems: store.wishlistItems().filter(item => item.id !== product.id)});
            alert('Product removed from wishlist');
        }),
        clearWishlist: (() => {
            patchState(store, {wishlistItems: []});
        }),
        addToCart: signalMethod<CartItem>((cartItem: CartItem) => {
            const product = store.cartItems().find(product => product.product.id === cartItem.product.id);
            if (!product) {
                //add product to cart
                patchState(store, {cartItems: [...store.cartItems(), cartItem]});
                console.log(store.cartItems());
            }else{
                //update product in cart
                const index = store.cartItems().findIndex(product => product.product.id === cartItem.product.id);
                store.cartItems()[index].quantity = product.quantity + cartItem.quantity;
                console.log(store.cartItems()[index]);
            }

            alert('Product added to cart');
        }),
        setItemQuantity: ((cartItem: CartItem, quantity: number) => {
            //change the quantity of the product in the cart in order to trigger the computed total in the cart-item component
            patchState(store, {cartItems: store.cartItems().map(item => item.product.id === cartItem.product.id ? {...item, quantity} : item)});
        }),
        addAllWIshlistItemsToCart: (() => {
           
            let _items = store.wishlistItems();
            let newcartitems: CartItem[] = []
            
            newcartitems = store.cartItems().map(_cartitem => {
                const whislitsItem = _items.find(_item => _cartitem.product.id === _item.id);
                //remove the product from the wishlist as we go
                _items = _items.filter(_item => _item.id !== _cartitem.product.id);
                
                if(whislitsItem !== undefined){
                   return {..._cartitem, quantity: _cartitem.quantity + 1};
                }else{
                    return {..._cartitem, quantity: _cartitem.quantity};
                }
             
            });

            //just add the products that are still in the wishlist
            _items.map(item => {
                newcartitems.push({product: item, quantity: 1});
             });
           
            patchState(store, {cartItems: newcartitems, wishlistItems: []});
          
        }),

        removeFromCart: signalMethod<CartItem>((cartItem: CartItem) => {
            patchState(store, {cartItems: store.cartItems().filter(item => item.product.id !== cartItem.product.id)});
        }),
        returnToWishlist: signalMethod<Product>((product: Product) => {
          patchState(store, {cartItems: store.cartItems().filter(item => item.product.id !== product.id), wishlistItems: [...store.wishlistItems(), product]});
        }),
        proceedToCheckout:(() => {
            if(store.user() === null){
            dialog.open(SignInDialog, {
                disableClose: true,
                data: {
                    checkout: true
                }
            })
            }else{
                 router.navigate(['/checkout']);
            }
        }),
        signIn: signalMethod<SignInParams>((params: SignInParams) => {
            patchState(store, {user: {id: params.email, email: params.email, name:'', imageUrl: 'https://picsum.photos/200/300'}});
            dialog.closeAll();
            if(params.checkout){
                router.navigate(['/checkout']);
            }
        }),
        signUp: signalMethod<SignUpParams>((params: SignUpParams) => {
            console.log(params);
            dialog.closeAll();
            patchState(store, {user: {id: params.email, email: params.email, name: params.name, imageUrl: 'https://picsum.photos/200/300'}});
            
        }),
        logOut:(() => {
            patchState(store, {user: null}); 
        }),
        placeOrder:(() => {
            alert('Order placed');  
            patchState(store, {loading: true});

            if(store.user() === null){
                alert('Please sign in to place the order');
                return;
            }else{
                
                const order: Order = {
                    id: '1',
                    user: store.user()?.id || null,
                    items: store.cartItems(),
                    total: store.cartItems().reduce((acc, item) => {
                        return acc + item.quantity * item.product.price;
                    }, 0),
                    paymentStatus: 'success'
                }
                alert('Order placed');
            }     

            setTimeout(() => {
                patchState(store, {loading: false, cartItems: []});
                router.navigate(['/order-success']);
            }, 2000);

            
        }),
        
        setProduct: signalMethod<string>((productId: string) => {
            console.log(productId);
            patchState(store, {selectedProductId: productId});  
        })
            
    }))
  
)