"use client";
import { useState } from "react";
import clsx from "clsx";
import { CreditCard, WalletCards, House } from "lucide-react";

import { ResizablePanel } from "@/components/ui/resizable";
import { Nav } from "@/components/ui/nav";

interface NavBarProps {
  defaultCollapsed?: boolean;
}

export const NavBar: React.FC<NavBarProps> = ({ defaultCollapsed }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    Boolean(defaultCollapsed)
  );

  return (
    <ResizablePanel
      collapsible
      minSize={15}
      maxSize={20}
      onCollapse={() => {
        setIsCollapsed(true);
        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
          isCollapsed
        )}`;
      }}
      className={clsx(
        isCollapsed && "min-w-[50px] transition-all duration-300 ease-in-out"
      )}
    >
      {/* <Separator /> */}
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
    </ResizablePanel>
  );
};
