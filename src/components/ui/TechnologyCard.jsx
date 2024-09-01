import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import Icon from '../Icon.astro';

export const TechnologyCardComponent = ({ children }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Card className="w-[150px] h-[150px] flex items-center">
            <CardContent className="w-full h-full flex items-center justify-center p-0">
              {children}
            </CardContent>
          </Card>
        </TooltipTrigger>
        <TooltipContent>
          <Card>
            <CardHeader>
              <h2 class="text-xl font-bold">Python</h2>
            </CardHeader>
            <CardContent>
              <p>I work with Python for 10 years.</p>
            </CardContent>
          </Card>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
