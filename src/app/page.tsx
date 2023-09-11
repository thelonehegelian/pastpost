import { Account } from '../components/Account';
import { Connect } from '../components/Connect';
import { Connected } from '../components/Connected';
import { Counter } from '../components/Counter';
import { NetworkSwitcher } from '../components/NetworkSwitcher';
import LandingPage from '../components/LandingPage';
export function Page() {
  return (
    <>
      <Connect />

      <Connected>
        <Account />
        <hr />
        <Counter />
        <hr />
        <NetworkSwitcher />
      </Connected>
    </>
  );
}

export default Page;
