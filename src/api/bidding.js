import { Users, Clock, Gavel } from 'lucide-react';

export const biddingStages = [
  {
    id: 'pre-bid',
    title: '1. Pre-Bid',
    icon: Users,
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
    steps: [
      'Auction is announced',
      'Bidders register interest',
      'Minimum number of bidders required',
      'Once threshold is met, bidding can begin',
    ],
  },
  {
    id: 'ongoing-bid',
    title: '2. Ongoing Bid',
    icon: Clock,
    iconBgColor: 'bg-green-100',
    iconColor: 'text-green-500',
    steps: [
      'Bidding starts with a countdown timer (e.g., 1 hour)',
      'Bidders place their bids',
      'Each new bid resets the timer',
      'Bidding continues until timer expires',
    ],
  },
  {
    id: 'post-bid',
    title: '3. Post-Bid',
    icon: Gavel,
    iconBgColor: 'bg-purple-100',
    iconColor: 'text-purple-500',
    steps: [
      'Timer expires, bidding ends',
      'Highest bidder is determined',
      'Results are announced',
      'Winner completes the transaction',
    ],
  },
];
