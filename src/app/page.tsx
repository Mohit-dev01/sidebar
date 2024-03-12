import Image from "next/image";

import { RxHamburgerMenu } from "react-icons/rx";
import { RiArrowDropDownLine } from "react-icons/ri";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <>
      <div className="ml-10 mt-10">
        <Sheet>
          <SheetTrigger>
            {" "}
            <RxHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
              <SheetDescription className="border">
                {/* This action cannot be undone. This will permanently delete your account
        and remove your data from our servers. */}
                <ul className="text-left ">
                  <li className="">Home</li>
                  <li className="flex items-center justify-between">
                
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between">    Food Products <RiArrowDropDownLine /></DropdownMenuTrigger>
                      <DropdownMenuContent>
                     
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>Subscription</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </li>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
