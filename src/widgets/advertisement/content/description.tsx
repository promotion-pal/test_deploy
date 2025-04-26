'use client';

import { cn } from '@/shared/utils';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface DescriptionProps {
  className?: string;
  text: string;
  expandedText?: string;
  buttonText?: {
    expand?: string;
    collapse?: string;
  };
  clampLines?: number;
  icon?: React.ReactNode;
}

export function Description({
  className,
  text,
  expandedText,
  buttonText = {
    expand: 'Читать далее',
    collapse: 'Свернуть',
  },
  clampLines = 3,
  icon = <ChevronRight className='ml-1 inline h-4 w-4 text-primary' />,
}: DescriptionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const contentToShow = isExpanded
    ? `${text}${expandedText ? ` ${expandedText}` : ''}`
    : text;

  const lineClampClass =
    {
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    }[clampLines] || 'line-clamp-3';

  return (
    <div className={cn('relative text-lg', className)}>
      <p className={cn('text-gray-600', !isExpanded && lineClampClass)}>
        {contentToShow}
      </p>

      {(expandedText || text.length > 150) && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className='text-blue-600 hover:text-blue-800 mt-2 inline-flex items-center focus:outline-none'
          aria-expanded={isExpanded}
        >
          <span className='whitespace-nowrap text-primary'>
            {isExpanded ? buttonText.collapse : buttonText.expand}
          </span>
          {!isExpanded && icon}
        </button>
      )}
    </div>
  );
}
