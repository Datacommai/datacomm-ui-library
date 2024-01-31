import { Button } from '@/components/buttons/button';

export default function Home() {
 return (
  <main className="flex h-screen  justify-center items-center fle-col bg-white">
   <section>
    <Button size="regular" primary={true} label="test" />
    <Button size="small" primary={false} label="test" />
   </section>
  </main>
 );
}
