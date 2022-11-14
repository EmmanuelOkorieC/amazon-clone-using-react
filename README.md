# amazon-clone-using-react
This is an e-commerce clone i worked on personally using React, nodeJs and firebase.
I integrated react-router-dom for moving through pages, i used material Ui to get and use icons, i used react-currency-format to build the subtotal page before
checkout.
I tried integrating stripe for payment earlier on but then i realized stripe does not work in nigeria so i integrated payment using paystack instead.
The code i used for paystack payment integration can be found on the paymentTwo component in the src folder
I also created a time stamp page for orders after successful processing of payment. I did this using firebase and firestore.
It was an interesting and woderful project and i learnt a lot working on it

```mermaid
graph TD;
   Alice's House-->Bob's House;
   Alice's House-->Cabin;
   Alice's House-->Post Office;
   Bob's House-->Alice's House;
   Bob's House-->Town Hall;
   Cabin-->Alice's House;
   Post Office-->Alice's House;
   Town Hall-->Bob's House;
   Town Hall-->Daria's House;
   Town Hall-->Marketplace;
   Town Hall-->Shop;
   Daria's House-->Ernie's House;
   Daria's House-->Town Hall;
   Ernie's House-->Daria's House;
   Ernie's House-->Grete's House;
   Grete's House-->Ernie's House;
   Grete's House-->Farm;
   Grete's House-->Shop;
   Farm-->Grete's House;
   Farm-->Marketplace;
   Shop-->Grete's House;
   Shop-->Marketplace;
   Shop-->Town Hall;
   Marketplace-->Farm;
   Marketplace-->Post Office;
   Marketplace-->Shop;
   Marketplace-->Town Hall;
```
