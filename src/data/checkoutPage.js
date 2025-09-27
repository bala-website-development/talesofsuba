import image from "@/images/update-26-01-2021/shops/paypal-1.jpg";

const text = "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order wont be shipped until the funds have cleared.";

export const checkoutPage = {
  checkoutMethods: [
    {
      id: 1,
      title: "Direct Bank Transfer",
      text,
    },
    {
      id: 2,
      image,
      title: "Paypal payment",
      text,
    },
  ],
  inputs: [
    {
      name: "firstName",
      placeholder: "First Name",
      type: "text",
      col: 6,
    },
    {
      name: "lastName",
      placeholder: "Last Name",
      type: "text",
      col: 6,
    },
    {
      name: "company",
      placeholder: "Company",
      type: "text",
      col: 12,
    },
    {
      name: "address",
      placeholder: "Address",
      type: "text",
      col: 12,
    },
    {
      name: "apartment",
      placeholder: "Apartment, Unit, etc. (optional)",
      type: "text",
      col: 12,
    },
    {
      name: "townCity",
      placeholder: "Town / City",
      type: "text",
      col: 12,
    },
    {
      name: "state",
      placeholder: "State",
      type: "text",
      col: 6,
    },
    {
      name: "zipCode",
      placeholder: "Zip Code",
      type: "text",
      col: 6,
    },
    {
      name: "email",
      placeholder: "Email Address",
      type: "email",
      col: 6,
    },
    {
      name: "Phone",
      placeholder: "phone",
      type: "text",
      col: 6,
    },
    {
      name: "isCreateAccount",
      id: "create-account",
      type: "checkbox",
      col: 6,
      label: "Create an Account?",
    },
  ],
};
