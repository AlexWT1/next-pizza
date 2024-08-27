'use client';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
}

const cats = [
  {
    id: 1,
    name: 'Пиццы',
  },
  {
    id: 2,
    name: 'Комбо',
  },
  {
    id: 3,
    name: 'Закуски',
  },
  {
    id: 4,
    name: 'Коктели',
  },
  {
    id: 5,
    name: 'Кофе',
  },
  {
    id: 6,
    name: 'Десерты',
  },
];

export const Categories: React.FC<Props> = ({ className }) => {
  const categoyAcriveId = useCategoryStore((state) => state.activeId);
  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map(({ name, id }, i) => (
        <a
          key={i}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            categoyAcriveId === id && 'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href=""
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
