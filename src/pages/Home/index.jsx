// Components
import BeginButton from '../../components/BeginButton'

export default function Home({ handleNav }) {
  return (
    <div className="flx cnt-cnt">
      <BeginButton handleNav={handleNav} />
    </div>
  );
}
