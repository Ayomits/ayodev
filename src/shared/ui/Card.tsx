import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes } from 'react';

const cardStyles = cva('flex rounded-xl flex-col', {
  variants: {
    variant: {
      outlined: 'border border-secondary/30',
      filled: 'bg-secondary',
    },
  },
  defaultVariants: {
    variant: 'outlined',
  },
});

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardStyles> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardStyles({ variant: variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('p-6 flex flex-col gap-2', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
const CardTitle = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('text-foreground text-xl font-bold', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
const CardDescription = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn('text-secondary text-sm', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className={cn('p-6 pt-0 flex', className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);
const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn('flex p-6 pt-0 gap-2 items-center w-full', className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
