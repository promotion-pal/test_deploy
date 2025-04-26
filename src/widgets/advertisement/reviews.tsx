import { Feedback } from '@/features/api/types/ads/house';
import Image from 'next/image';
import { Description } from './content';
import { ProfilePicture } from './ui';
import { Text } from './ui/title';

interface ReviewsProps {
  feedbacks: Feedback[];
}

export function Reviews({ feedbacks }: ReviewsProps) {
  return (
    <section className='mt-5 rounded-lg bg-gray-light px-5 py-10'>
      <Text title='Отзывы' />

      {feedbacks.length > 0 ? (
        <WrapperFeedback feedbacks={feedbacks} />
      ) : (
        <p className='mt-3 text-gray-500'>Пока нет отзывов</p>
      )}
    </section>
  );
}

function WrapperFeedback({ feedbacks }: ReviewsProps) {
  return (
    <div className='mt-7 space-y-6'>
      {feedbacks.map((feedback) => (
        <FeedbackCard key={feedback.id} {...feedback} />
      ))}
    </div>
  );
}

function FeedbackCard({ user, text, rating, photos }: Feedback) {
  return (
    <div className='flex flex-col space-y-6'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <ProfilePicture name={user} />
          <p className='text-lg font-medium text-cyan'>{user}</p>
        </div>

        <StarIcon rating={rating} />
      </div>

      <Description text={text} />
    </div>
  );
}

function StarIcon({ rating }: { rating: number }) {
  return (
    <div className='flex space-x-1 rounded-lg bg-primary px-2 py-1 text-lg text-white'>
      <p>{rating}</p>
      <Image
        src={'/image/icon/advertisement/star.svg'}
        width={15}
        height={15}
        alt='Рейтинг'
      />
    </div>
  );
}
