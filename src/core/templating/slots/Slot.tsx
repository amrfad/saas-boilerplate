import type { SlotProps } from '../types/Template.types';

export function Slot({ id, name, children, fallback }: SlotProps) {
  return (
    <div data-slot={id} data-slot-name={name}>
      {children || fallback || null}
    </div>
  );
}
