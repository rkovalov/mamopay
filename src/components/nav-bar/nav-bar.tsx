"use client";
import { CreditCard, WalletCards, House } from "lucide-react";
import { useStore } from "zustand";
import { Nav } from "@/components/ui/nav";

interface NavBarProps {
  isCollapsed: boolean;
  totalExpenses: number | null;
}

export const NavBar: React.FC<NavBarProps> = ({
  isCollapsed,
  totalExpenses,
}) => {
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
          label: Number(totalExpenses) > 0 ? String(totalExpenses) : "-", // count of items
          icon: WalletCards,
        },
      ]}
    />
  );
};
