'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "@/components/ThemeButton"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/components/Blogs", label: "Blogs" },
    { href: "/components/Skills", label: "Skills" },
    { href: "/components/Contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">Rajneesh Kushwaha</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors relative",
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/60 hover:text-foreground"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-6 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}
            <Button asChild variant="ghost" className="border-2 border-solid">
              <Link href="/components/Login">Login</Link>
            </Button>
            <Button asChild variant="ghost" className="border-2 border-solid">
              <Link href="/components/Signup">Signup</Link>
            </Button>
            <ModeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2 ">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6H20M8 12H20M4 18H20" />
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[60%] sm:max-w-sm">
                <SheetHeader>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 m-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-sm font-medium transition-colors",
                        isActive(link.href)
                          ? "text-primary font-semibold"
                          : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button asChild className="w-full bg-black text-white border-solid dark:bg-white dark:text-black">
                    <Link href="/components/Login">Login</Link>
                  </Button>
                  <Button asChild className="w-full bg-gray-200 text-black dark:bg-gray-700 dark:text-white">
                    <Link href="/components/Signup">Signup</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 