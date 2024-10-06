import {
 DatacommButton,
 ButtonTypes,
} from './components/buttons/datacomm-button';

export default function Home() {
 return (
  <main className="flex flex-col justify-center items-center m-5">
   <h1>Datacomm UI Library</h1>
   <section className="m-5">
    <DatacommButton type={ButtonTypes.PRIMARY} title="sign up" />
   </section>
  </main>
 );
}
