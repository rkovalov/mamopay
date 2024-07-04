import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default async function Payments() {
  return (
    <div className="flex flex-col">
      <div className="jus">
        <Link href="/payments/new">
          <Button variant="outline">
            Create New <Plus />
          </Button>
        </Link>
      </div>
    </div>
  );
}
