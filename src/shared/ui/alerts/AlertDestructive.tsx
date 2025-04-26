import { Alert, AlertDescription } from '@/shared/ui/alert';
interface AlertProps {
  message: string;
}
export function AlertDestructive({ message }: AlertProps) {
  return (
    <Alert
      className='absolute z-10 w-fit border-red-600 bg-white p-1 text-red-500'
      variant='destructive'
    >
      {/* <AlertTitle>Error</AlertTitle> */}
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
