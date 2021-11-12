import { useMemo } from "react";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

const useRouter = () => {
  const location = useLocation();

  const queries = useMemo(() => {
    return parse(location.search);
  }, [location.search]);

  return { ...location, queries};
};

export default useRouter;
