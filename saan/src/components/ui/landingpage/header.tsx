import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react"; // For the hamburger menu icon

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 sticky top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        {/* Logo/Name */}
        <h1 className="text-2xl font-bold">SAAN Coaching</h1>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex space-x-4 md:items-center">
          <a href="#bridge-course" className="hover:text-yellow-300 transition-colors">Bridge Course</a>
          <a href="#computer-training" className="hover:text-yellow-300 transition-colors">Computer Training</a>
          <a href="#coaching" className="hover:text-yellow-300 transition-colors">Coaching 5-10</a>
          <a href="#mobile-repairing" className="hover:text-yellow-300 transition-colors">Mobile Repairing</a>
          <a href="#programming" className="hover:text-yellow-300 transition-colors">Programming</a>
          <a href="#web-development" className="hover:text-yellow-300 transition-colors">Web Development</a>
          <Button asChild variant="outline" className="text-blue-900 bg-yellow-500 hover:bg-yellow-600">
            <a href="#contact">Contact Us</a>
          </Button>
        </nav>

        {/* Navigation for Mobile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" className="text-white border-white">
              <Menu className="h-6 w-6 text-black" />

            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>
              <a href="#bridge-course" className="w-full">Bridge Course</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#computer-training" className="w-full">Computer Training</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#coaching" className="w-full">Coaching 5-10</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#mobile-repairing" className="w-full">Mobile Repairing</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#programming" className="w-full">Programming</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#web-development" className="w-full">Web Development</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#contact" className="w-full">Contact Us</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}