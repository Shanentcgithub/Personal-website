import { Button } from "@/components/ui/button";
import {Codesandbox} from "lucide-react" 

export function ButtonSecondary() {
  return (
    <Button
      className="bg-gradient-to-r from-blue-300 to-purple-300 text-lg font-bold py-3 px-6 rounded-lg hover:from-pink-300 hover:to-yellow-300 transition-colors duration-300"
    >
      <Codesandbox/> Personal Portfolio
    </Button>
  );
}
