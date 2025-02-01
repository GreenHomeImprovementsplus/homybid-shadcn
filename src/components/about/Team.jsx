import { Card, CardContent } from '@/components/ui/card';

const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'CEO & Founder',
    image: 'https://github.com/shadcn.png',
  },
  { name: 'John Smith', role: 'CTO', image: 'https://github.com/shadcn.png' },
  {
    name: 'Alice Johnson',
    role: 'Head of Operations',
    image: 'https://github.com/shadcn.png',
  },
];

export function Team() {
  return (
    <section className='mb-20'>
      <h2 className='text-3xl font-semibold mb-8 text-center'>Our Team</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className='hover:shadow-lg transition-shadow duration-300 border border-gray-200'
          >
            <CardContent className='flex flex-col items-center text-center p-6'>
              <img
                src={member.image || '/placeholder.svg'}
                alt={member.name}
                width={150}
                height={150}
                className='rounded-full mb-4 border-4 border-black'
              />
              <h3 className='text-xl font-semibold'>{member.name}</h3>
              <p className='text-gray-600'>{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
