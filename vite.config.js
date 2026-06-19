import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        signin:           resolve(__dirname, "src/pages/auth/signin.html"),
        paymentFailed:    resolve(__dirname, "src/pages/checkout/payment-failed.html"),
        shippingPayment:  resolve(__dirname, "src/pages/checkout/shipping-payment.html"),
        orderConfirm:     resolve(__dirname, "src/pages/checkout/order-confirm.html"),
        paymentConfirm:   resolve(__dirname, "src/pages/checkout/payment-confirm.html"),
        otpVerify:        resolve(__dirname, "src/pages/checkout/otp-verify.html"),
        paymentGuest:     resolve(__dirname, "src/pages/checkout/payment-guest.html"),
        paymentUser:      resolve(__dirname, "src/pages/checkout/payment-user.html")
      }
    }
  },
  server: {
    port: 5173,
    host: true,
    open: "/pages/auth/signin.html"
  }
});