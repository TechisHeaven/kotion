import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Search, StickyNote } from "lucide-react";

export default async function SearchBox() {
  const tags = Array.from({ length: 10 }).map((_, i, a) => `Untitled Note`);
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <div className="flex items-center gap-2 p-1 cursor-pointer rounded-sm px-4 hover:bg-slate-200 transition-colors">
          <Search className="w-4" />
          <p className="text-sm  font-semibold">Search</p>
        </div>
      </DialogTrigger>
      <DialogContent className="p-2 min-h-[500px]">
        <DialogDescription>
          <div>
            <div className="relative w-full mt-10">
              <Search className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-500 left-3" />
              <Input
                type="text"
                placeholder="Search Test Notions..."
                className="pl-12 pr-4 "
              />
            </div>
            <div className="items flex flex-col gap-1 mt-2 ">
              <ScrollArea className=" w-full h-[500px]">
                {tags.map((tag) => (
                  <>
                    <div className="item flex items-center gap-2 p-1 hover:bg-slate-50 transition-colors cursor-pointer">
                      <FileText className="w-4 " />
                      <div>{tag}</div>
                    </div>
                  </>
                ))}
              </ScrollArea>
            </div>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
