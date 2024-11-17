import { roboto } from "./fonts";
import Header from "@/components/Header";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

export const metadata = {
  title: {
    template: "%s | Next15 Blog",
    default: "Next15 Blog",
  },
  // description: "This blog created with Next15,for exercise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="mt-12">{children}</main>
        <Chatbot />
      </body>
    </html>
  );
}
