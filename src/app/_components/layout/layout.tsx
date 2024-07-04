"use client";
import { useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { Separator } from "@/components/ui/separator";
import { NavBar } from "@/components/nav-bar";
import { useExpensesStore } from "../../expenses/_store/store";

import {
  ResizablePanelGroup,
  ResizableHandle,
  ResizablePanel,
} from "@/components/ui/resizable";
import clsx from "clsx";

interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const expensesStore = useExpensesStore();

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-full items-stretch"
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
      >
        <ResizablePanel
          collapsible
          className={clsx(
            isCollapsed &&
              "min-w-[50px] transition-all duration-300 ease-in-out"
          )}
          defaultSize={25}
          minSize={10}
          maxSize={25}
          onExpand={() => {
            setIsCollapsed(false);
          }}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              isCollapsed
            )}`;
          }}
        >
          <NavBar
            isCollapsed={isCollapsed}
            totalExpenses={expensesStore.totalExpenses}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize={75}
          style={{ overflow: "auto" }}
          className="flex flex-col"
        >
          <main className="flex-1 flex flex-col p-2">
            <div className="flex-1 flex flex-col">{children}</div>
          </main>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
};
