"use client";

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Icons } from "@/components/icons";
import { SidebarNav } from "./sidebar-nav"; // The navigation links component for the sidebar
import { ThemeToggleButton } from "./theme-toggle-button"; // Button to switch between light/dark mode
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarProvider, // Context provider to manage sidebar state (expanded/collapsed, mobile open/closed)
  Sidebar,
  SidebarHeader,
  SidebarContent, // The main scrollable area for sidebar content (like nav links)
  SidebarFooter,
  SidebarTrigger, // A button (usually a hamburger icon) to toggle the sidebar on mobile
  SidebarInset, // A component that wraps the main content area, adjusting its layout based on the sidebar
} from "@/components/ui/sidebar";

// The AppLayout component receives 'children' which will be the actual page content
export function AppLayout({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    // SidebarProvider wraps the entire layout. It manages the state of the sidebar (open, collapsed, mobile view).
    // defaultOpen means the sidebar will be expanded by default on desktop.
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen w-full">
        <Sidebar collapsible="icon" className="border-r">
          {/* SidebarHeader: Contains the logo and app name. */}
          <SidebarHeader className="p-4 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 font-headline text-xl font-semibold text-primary"
            >
              <Icons.logo className="h-7 w-7" />
              {/* The app name span will be hidden when the sidebar is collapsed to icon-only view on desktop */}
              <span className="group-data-[collapsible=icon]:hidden transition-opacity duration-200">
                MediCare
              </span>
            </Link>
          </SidebarHeader>

          {/* SidebarContent: This is where the main navigation links go.
              flex-1 makes it take up available vertical space. */}
          <SidebarContent className="flex-1">
            <SidebarNav /> {/* Renders the actual navigation links */}
          </SidebarContent>

          {/* SidebarFooter: A small section at the bottom of the sidebar.
              border-t adds a top border. */}
          <SidebarFooter className="p-4 border-t">
            {session?.user && (
              <div className="group-data-[collapsible=icon]:hidden">
                <div className="flex items-center gap-2 text-sm">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={session.user.image || ""} />
                    <AvatarFallback>
                      {session.user.name?.charAt(0) || "U"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-medium truncate">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {session.user.email}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center group-data-[collapsible=icon]:hidden mt-2">
              MediCare App
            </p>
          </SidebarFooter>
        </Sidebar>

        {/* SidebarInsert :- This component wraps the main content area when we change the routing with the help of the sidebar. */}

        <SidebarInset className="flex flex-col flex-1">
          <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-6">
            {/* SidebarTrigger: This is typically a hamburger icon button.
                It's shown on mobile (md:hidden) to open/close the sidebar. */}
            <SidebarTrigger className="md:hidden" />

            <div className="flex-1"></div>

            {/* User Menu */}
            {session?.user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={session.user.image || ""} />
                      <AvatarFallback>
                        {session.user.name?.charAt(0) || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {session.user.name}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {session.user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <Icons.logout className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            <ThemeToggleButton />
          </header>
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
