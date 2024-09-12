import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface HTMLElement {
  restoTitle: string;
  restoDesc: string;
}

export const InfoResto = ({ restoTitle, restoDesc }: HTMLElement) => {
  return (
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{restoTitle}</DialogTitle>
        </DialogHeader>
        <DialogDescription>{restoDesc}</DialogDescription>
      </DialogContent>
    </Dialog>
  );
};
