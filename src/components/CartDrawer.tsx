import { useState } from 'react';
import { X, Minus, Plus, ShoppingBag, ArrowLeft, CreditCard, Building2, Loader2, CheckCircle, Package } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import type { CheckoutStep } from '@/types';

export function CartDrawer() {
  const { items, removeFromCart, updateQuantity, subtotal, tax, total, isCartOpen, setIsCartOpen, clearCart } = useCart();
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('summary');
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const handleProceedToPayment = () => {
    setCheckoutStep('payment');
  };

  const handlePayOnline = () => {
    setShowPaymentDialog(true);
  };

  const handleContinueWithOrder = () => {
    setShowPaymentDialog(false);
    setCheckoutStep('redirecting');
    
    // Simulate redirect delay
    setTimeout(() => {
      const newOrderNumber = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
      setOrderNumber(newOrderNumber);
      setCheckoutStep('confirmation');
    }, 2000);
  };

  const handleBackToSummary = () => {
    setCheckoutStep('summary');
  };

  const handleContinueShopping = () => {
    setIsCartOpen(false);
    setCheckoutStep('summary');
    clearCart();
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <>
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetContent className="w-full sm:max-w-lg flex flex-col">
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-purple-600" />
              {checkoutStep === 'summary' && 'Order Summary'}
              {checkoutStep === 'payment' && 'Payment Details'}
              {checkoutStep === 'redirecting' && 'Processing'}
              {checkoutStep === 'confirmation' && 'Order Confirmation'}
            </SheetTitle>
          </SheetHeader>

          <div className="flex-1 overflow-y-auto py-4">
            {/* Order Summary Step */}
            {checkoutStep === 'summary' && (
              <div className="space-y-4">
                {items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">Your cart is empty</p>
                    <Button
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 btn-primary"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                ) : (
                  <>
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-24 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-gray-900 line-clamp-2">
                            {item.name}
                          </h4>
                          <p className="text-purple-600 font-semibold mt-1">
                            {formatPrice(item.price)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-purple-50 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-purple-50 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Separator className="my-4" />

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">{formatPrice(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tax (8%)</span>
                        <span className="font-medium">{formatPrice(tax)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-semibold pt-2">
                        <span>Total</span>
                        <span className="text-purple-600">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Payment Step */}
            {checkoutStep === 'payment' && (
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">Order Summary</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Total Amount</span>
                    <span className="font-semibold text-purple-900">{formatPrice(total)}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-4">Payment Options</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Please select your preferred payment method to complete your order.
                  </p>

                  <div className="space-y-3">
                    <button
                      onClick={handlePayOnline}
                      className="w-full p-4 border-2 border-purple-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-purple-600" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">Pay Online</p>
                        <p className="text-sm text-gray-500">Secure payment via credit/debit card</p>
                      </div>
                    </button>

                    <button
                      onClick={handlePayOnline}
                      className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900">Bank Transfer</p>
                        <p className="text-sm text-gray-500">Pay directly to our bank account</p>
                      </div>
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleBackToSummary}
                  variant="outline"
                  className="w-full"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </div>
            )}

            {/* Redirecting Step */}
            {checkoutStep === 'redirecting' && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full border-4 border-purple-200 border-t-purple-600 animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
                  </div>
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">
                  Redirecting to payment gateway...
                </h4>
                <p className="text-sm text-gray-500 text-center">
                  Please wait while we process your request
                </p>
              </div>
            )}

            {/* Confirmation Step */}
            {checkoutStep === 'confirmation' && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You For Your Order!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your order has been successfully placed. Please contact our support team to complete the payment.
                </p>

                <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-mono font-medium">{orderNumber}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Total Amount:</span>
                    <span className="font-medium">{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Payment Status:</span>
                    <span className="text-amber-600 font-medium">Pending</span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4 mb-6 text-left">
                  <h4 className="font-medium text-purple-900 mb-2">Payment Instructions</h4>
                  <p className="text-sm text-purple-700 mb-2">
                    Please contact our support team to complete your payment:
                  </p>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-purple-600">Email:</span> info@growthsparkllc.com</p>
                    <p><span className="text-purple-600">Phone:</span> +1 919 892 3654</p>
                  </div>
                  <p className="text-xs text-purple-600 mt-2">
                    Please mention your order number when contacting support.
                  </p>
                </div>

                <Button onClick={handleContinueShopping} className="btn-primary w-full">
                  <Package className="w-4 h-4 mr-2" />
                  Continue Shopping
                </Button>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {checkoutStep === 'summary' && items.length > 0 && (
            <div className="border-t pt-4 space-y-3">
              <Button onClick={handleProceedToPayment} className="btn-primary w-full">
                Proceed to Payment
              </Button>
              <Button
                onClick={() => setIsCartOpen(false)}
                variant="outline"
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Payment Disabled Dialog */}
      <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-purple-600" />
              Payment Information
            </DialogTitle>
            <DialogDescription className="pt-4">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
                <p className="text-amber-800 text-sm">
                  Automatic online payment is currently disabled. Please place your order and contact our support team to complete the payment.
                </p>
              </div>
              <div className="text-sm text-gray-600">
                <p className="mb-2">Our support team will assist you with:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-500">
                  <li>Payment processing</li>
                  <li>Order confirmation</li>
                  <li>Product delivery</li>
                </ul>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button
              onClick={() => setShowPaymentDialog(false)}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              onClick={handleContinueWithOrder}
              className="btn-primary flex-1"
            >
              Continue with Order
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
