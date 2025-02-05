import { useCountdownTimer } from '@/api/useCountdownTimer';
import { TimerIcon } from 'lucide-react';

export function Timer({ initialTime }) {
  const { formattedTime } = useCountdownTimer(initialTime);

  return (
    <div className='bg-gray-200 border border-gray-300 rounded-full px-3 flex items-center gap-2 text-sm'>
      <TimerIcon size={16} />
      <span>{formattedTime}</span>
    </div>
  );
}
