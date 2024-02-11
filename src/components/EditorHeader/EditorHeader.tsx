import {
  Delete,
  Globe,
  Link,
  MoreHorizontal,
  Trash,
  Trash2,
} from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";

export default function EditorHeader({
  pageTitle,
  setPageTitle,
}: {
  pageTitle: string;
  setPageTitle: any;
}) {
  return (
    <div className="flex font-semibold flex-row justify-between gap-2 items-center p-2 px-4">
      <div className="title">
        <input
          type="text"
          placeholder="title text here..."
          onChange={(e) => setPageTitle(e.target.value)}
          className="text-sm w-full outline-none"
          id="title"
          value={pageTitle}
        />
      </div>
      <div className="flex items-center gap-4 pr-2">
        <p className="timestamp text-xs text-slate-400">Edited just now</p>
        <Popover>
          <PopoverTrigger className="flex items-center">
            <button className="p-1 px-2 text-sm rounded-md hover:bg-slate-100">
              Share
            </button>
          </PopoverTrigger>
          <PopoverContent className="p-2 w-full">
            <Tabs defaultValue="share" className="w-[400px]">
              <TabsList className="h-full">
                <TabsTrigger value="share" className="p-1 px-2">
                  Share
                </TabsTrigger>
                <TabsTrigger value="pubish" className="p-1 px-2">
                  Publish
                </TabsTrigger>
              </TabsList>
              <TabsContent value="share" className="flex flex-col gap-2">
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Add email..."
                    className=" p-1 px-2 text-sm bg-slate-50 outline-slate-100 "
                  />
                  <button className="bg-black p-1 font-semibold px-2 text-white rounded-md text-sm">
                    Invite
                  </button>
                </div>
                <hr />
                <div className="flex items-center text-xs justify-end  w-full">
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-colors p-1 px-2">
                    <Link className="w-4" />
                    Copy link
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="pubish">
                <div className="flex items-center justify-center p-2 flex-col gap-2">
                  <div>
                    <Globe />
                  </div>
                  <h6 className="font-semibold">Publish to web</h6>
                  <p className="text-sm text-slate-500">
                    Publish a static website of this page.
                  </p>
                  <Button className="w-full">Publish</Button>
                </div>
              </TabsContent>
            </Tabs>
          </PopoverContent>
        </Popover>

        <div>
          <Popover>
            <PopoverTrigger className="flex items-center">
              <MoreHorizontal />
            </PopoverTrigger>
            <PopoverContent className="p-1">
              <div className="flex cursor-pointer p-2 hover:bg-gray-50 transition-color items-center text-sm">
                <Trash2 className="w-4 mr-2" />
                Delete
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
