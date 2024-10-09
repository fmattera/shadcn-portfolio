import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { InfoIcon } from 'lucide-react';

import { Post } from '@/types/post';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import TextReveal from '@/components/text-reveal';

interface PostCardProps extends Post {
  href: string;
  thumbnail: string;
  className?: string;
}

function PostCard({
  title,
  description,
  href,
  thumbnail,
  date,
  className
}: PostCardProps) {
  return (
    <Card
      className={cn(
        'relative flex h-full flex-col justify-between border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900',
        className
      )}
    >
      <CardContent className="p-4 md:p-6">
        <div className="grid gap-2">
          <Image
            src={thumbnail || '/placeholder.svg'}
            alt={`Image of ${title}`}
            sizes="100vw"
            width={500}
            height={300}
            className="mb-2 aspect-video h-auto w-full rounded-md object-cover"
          />
          <h3 className="text-xl font-bold">
            <TextReveal>{title}</TextReveal>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <TextReveal>{description || ''}</TextReveal>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <TextReveal>{date.toDateString()}</TextReveal>
          </p>
          {/* <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge key={`project-tag_${index}`}>{tag.label}</Badge>
            ))}
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end p-4 md:p-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                className="z-[2] rounded-md border border-zinc-950/10 dark:border-zinc-50/10"
                asChild
              >
                <Link href={href}>
                  <InfoIcon />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>More Details</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardFooter>
      <Link href={href} className="z-1 absolute inset-0 block" />
    </Card>
  );
}

export default PostCard;
