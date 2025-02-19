const getElement = (selector) => cy.get(selector);

export default {
    getRemoveButton: (productName) => {
        return getElement(`[data-test="remove-${productName}"]`);
    },
    getContinueShoppingButton: () => {
        return getElement('[data-test="continue-shopping"]');
    },
    getCheckoutButton: () => {
        return getElement('[data-test="checkout"]');
    },
    getItemQuantity: (index) => {
        return getElement('[data-test="item-quantity"]').eq(index);
    },
    getRemoveAll: () => {
        return getElement('[data-test^="remove-sauce-labs"]');
    },
    cartList: () => {
        return getElement('[data-test="cart-list"]')
    },
    cartTotal: () => {
        return getElement('[data-test="cart-total"]')
    },
    removeFromCartButton: (itemName) => {
        return getElement(`[data-test="remove-${itemName}"]`)
    },
};
