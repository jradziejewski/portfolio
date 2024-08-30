import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export const AvatarComponent = ({ src, alt, fallbackText, className }) => {
  return (
    <Avatar className={className}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};
