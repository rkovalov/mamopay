import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Expenses() {
  return (
    <div className="flex flex-col">
      <div className="jus">
        <Button variant="outline">
          Create New <Plus />
        </Button>
      </div>
      Payment List
    </div>
  );
}
