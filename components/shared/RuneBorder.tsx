import { ReactNode } from 'react';

export function RuneBorder({ children }: { children: ReactNode }) {
  return (
    <div className="border-2 border-amber-600/50 p-1 rounded-md">
      {children}
    </div>
  );
}
