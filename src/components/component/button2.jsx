import { Button } from "@/components/ui/button";
import {UserPen} from "lucide-react" 

export function Button2() {
  return (
    <Button
      className="bg-gradient-to-r from-blue-300 to-purple-300 text-lg font-bold py-3 px-6 rounded-lg hover:from-pink-300 hover:to-yellow-300 transition-colors duration-300"
    >
     <UserPen /> HIRE ME!
    </Button>
  );
}
