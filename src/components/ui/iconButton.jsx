import { Button } from './button';

export function IconButton({ children, ...props }) {
  return (
    <Button variant="outline" size="icon" props>
      {children}
    </Button>
  );
}
