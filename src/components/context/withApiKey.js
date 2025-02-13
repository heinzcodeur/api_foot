import { useApiKey } from "./TennisContext";

const withApiKey = (Component) => {
  return (props) => {
    const apiKey = useApiKey();
    return <Component {...props} apiKey={apiKey} />;
  };
};

export default withApiKey;
