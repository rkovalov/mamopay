"use client";
import { CreditCard, WalletCards, House } from "lucide-react";

import { Nav } from "@/components/ui/nav";

interface NavBarProps {
  isCollapsed: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ isCollapsed }) => {
  return (
    <Nav
      isCollapsed={isCollapsed}
      links={[
        {
          title: "Home",
          href: "/",
          label: "",
          icon: House,
        },
        {
          title: "Payments",
          href: "/payments",
          label: "0", // count of items
          icon: CreditCard,
        },
        {
          title: "Expenses",
          href: "/expenses",
          label: "128", // count of items
          icon: WalletCards,
        },
      ]}
    />
  );
};
