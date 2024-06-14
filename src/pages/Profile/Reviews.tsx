import Star from './Star';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className="h-[500px]">
      <div className='space-y-2'>
        <h4>Ratings</h4>
        <div className="flex flex-row gap-2">
          {' '}
          <span className="bg-[#007f00] flex flex-row gap-3 items-center text-white rounded-sm px-1">
            {' '}
            4.8 <FaStar color="white" />{' '}
          </span>{' '}
          <span>From 6 Verified reviews </span>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div className="flex items-start gap-3">
              <img
                src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718296072/image_68_cfboe2.svg"
                alt=""
              />
              <div className='flex flex-col'>
              <h3>Quamdeen Brain</h3>
              <p>20/05/2024</p>
              </div>
            </div>
            <div className="flex items-end">
              <Star />
            </div>
          </div>
          <div>He is simple fanastic! I needed help with organising a last-minute event, and he handled everything with such professionalism and efficiency.From coordinat </div>
        </div>
        </div>
    </div>
  );
};

export default Reviews;
