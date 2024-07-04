export type PaymentInfo = {
  email: string;
  firstName: string;
  lastName: string;
  title: string;
};

declare global {
  interface Window {
    addIframeToWebsite: () => void;
  }
}
