import { AppMain } from '@/components/layout/AppMain';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { AppSidebarNavigation } from '@/components/layout/AppSidebarNavigation';
import { Package, packages } from '@/const/packages';
import { Button } from '@/shared/ui/Button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/shared/ui/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <AppMain>
      <div className='flex flex-col my-14'>
        <div className='flex flex-col gap-2 items-center'>
          <p className='bg-gradient-to-r animate-gradient from-[#999999] to-[#ffffff] bg-clip-text text-transparent text-2xl sm:text-4xl md:text-5xl font-bold'>
            Build the applications easier
          </p>
          <p className='text-xs sm:text-base'>
            Our tools allow you spend less time to write boilerplate
          </p>
        </div>
        <div className='flex flex-col gap-10 container mt-20 mx-auto'>
          <p className='text-2xl sm:text-4xl md:text-5xl text-center text-foreground font-extrabold'>
            Solutions
          </p>
          <div className='flex flex-wrap justify-center gap-4'>
            {packages.map((p: Package, idx) => (
              <Card key={idx} className='w-[300px] lg:w-[400px]'>
                <CardHeader className='h-[100px]'>
                  <CardTitle>{p.name}</CardTitle>
                  <CardDescription>{p.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link className='w-full' href={p.docs}>
                    <Button className='cursor-pointer w-full'>Docs</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <AppSidebar className='md:hidden'>
          <AppSidebarNavigation />
        </AppSidebar>
      </div>
    </AppMain>
  );
}
