import Error from '../components/Error';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const { statusText, data } = useRouteError();
  return (
    <div className="error-page">
      <Error message={statusText} explanation={data} />
    </div>
  );
}
